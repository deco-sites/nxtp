import { useEffect, useState } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { NavItem, TWelcomePortfolio, WelcomeCounter } from "../types/index.ts";
import Header from "../islands/Header.tsx";
import WelcomePortfolio from "./WelcomePortfolio.tsx";

export interface Props {
  mobileBackground: LiveImage;
  desktopBackground: LiveImage;
  logoSvg: string;
  navItems: NavItem[];
  navSocials: NavItem[];
  mainTitle: string;
  subTitle: string;
  counters: WelcomeCounter[];
  portfolio: TWelcomePortfolio;
}

export default function Welcome(
  {
    mobileBackground,
    desktopBackground,
    logoSvg,
    navItems,
    navSocials,
    mainTitle,
    subTitle,
    counters,
    portfolio,
  }: Props,
) {
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
    <div
      style={checkBackgroundMedia(
        `background-image: url('${mobileBackground.trim()}');`,
        `background-image: url('${desktopBackground.trim()}');`,
      )}
      class={checkBackgroundMedia(
        `bg-welcome flex flex-col w-full h-full text-white`,
        `flex flex-col w-full h-full text-white sm:bg-welcome-sm sm:bg-fixed`,
      )}
    >
      <Header logoSvg={logoSvg} navItems={navItems} navSocials={navSocials} />

      <div class="welcome-container sm:welcome-container-sm text-center">
        <div class="w-full h-full justify-between m-0 flex flex-wrap flex-col sm:flex-row sm:p-[1.5rem]">
          {/* Texts Section */}
          <div class="flex flex-col sm:w-[50%] sm:self-center">
            <div class="text-center sm:text-left x-p-calc">
              <h1
                class="font-sans text-mobile-title 2xl:text-[5.2rem] 3xl:text-[6.2rem] mb-[40px] font-main-title"
                dangerouslySetInnerHTML={{ __html: mainTitle }}
              />
              <span class="font-sans text-mobile-sub-title xl:text-[2.2rem] 2xl:text-[4.2rem] font-heading-2">
                {subTitle}
              </span>
            </div>
          </div>
          {/* Numbers Section */}
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
        </div>
      </div>

      <WelcomePortfolio title={portfolio?.title} slides={portfolio?.slides} />
    </div>
  );
}
