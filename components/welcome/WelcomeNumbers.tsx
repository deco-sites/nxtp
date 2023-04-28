import { useEffect, useState } from "preact/hooks";
import { WelcomeCounter } from "../../types/index.ts";

export interface Props {
  counters: WelcomeCounter[];
}

export default function WelcomeNumbers({ counters }: Props) {
  const [numbers, setNumbers] = useState<number[]>([]);

  const checkBackgroundMedia = (mobClasses: string, deskClasses = "") => {
    const isDesktop = window?.matchMedia?.("(min-width: 576px)")?.matches;

    if (isDesktop) {
      return deskClasses;
    }
    return mobClasses;
  };

  const animateNumber = (
    finalValue: number,
    seconds: number,
    callback: (v: number) => void,
  ) => {
    const startTime = (new Date()).getTime();
    const milliseconds = seconds * 100;

    const update = () => {
      const currentTime = (new Date()).getTime();
      let value = finalValue * (currentTime - startTime) / milliseconds;

      if (value >= finalValue) {
        value = finalValue;
      } else {
        setTimeout(update, 0);
      }

      callback && callback(value);
    };

    update();
  };

  useEffect(() => {
    if (counters) {
      counters.forEach((counter, index) => {
        const newNumbers = numbers;
        newNumbers[index] = 0;
        setNumbers([...newNumbers]);

        animateNumber(counter.number, 10, (value) => {
          const newNumbers = numbers;
          newNumbers[index] = Math.round(value);
          setNumbers([...newNumbers]);
        });
      });
    }
  }, [counters]);

  return (
    <div class="h-full py-[3rem] self-center w-full sm:w-[50%]">
      <div class="w-full h-full text-center flex sm:flex-col flex-wrap justify-around content-end ml-[-0.75rem] mt-[60px] sm:mt-0">
        {counters?.map((counter, index, arr) => (
          <div class="relative w-[25%] sm:w-[50%] px-[0.75rem] text-webkit-center">
            <p class="font-ltpro font-normal text-[36.1404px] sm:text-[6.2rem] leading-[1] tracking-[-.08em]">
              {numbers[index]?.toString()}
              {counter.usePlusIcon && (
                <span class="relative font-ltpro top-[-6px] right-[-6px] sm:right-0 sm:top-[-40px] text-[2rem] sm:text-[3rem]">
                  +
                </span>
              )}
            </p>
            <h5
              class="text-[20px] text-left sm:text-center m-[10px] sm:text-[1.5rem] leading-[110.1%] font-sans font-semibold uppercase sm:m-0 sm:mb-[.5rem] writing-vertical-rl sm:writing-mode-none"
              dangerouslySetInnerHTML={{ __html: counter.text }}
            />
            {index !== arr.length - 1 && (
              <span class="absolute right-0 top-0 h-full w-[1px] bg-gradient-line sm:hidden">
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
