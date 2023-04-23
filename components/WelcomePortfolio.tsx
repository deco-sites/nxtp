// import Image from "deco-sites/std/components/Image.tsx";
import { useId } from "preact/hooks";
import { Slider } from "./Slider.tsx";
import SliderControllerJS from "./SliderJS.tsx";
import { WelcomePortfolioSlide } from "../types/index.ts";

interface Props {
  title: string;
  slides: WelcomePortfolioSlide[];
}

function ButtonPrev() {
  return (
    <button
      class="block h-auto sm:hidden cursor-pointer outline-none focus:outline-none"
      data-slide="prev"
      aria-label="Previous item"
    >
      <svg class="w-[4em]">
        <use href={"/sprites.svg#button-prev"} />
      </svg>
    </button>
  );
}

function ButtonNext() {
  return (
    <button
      class="block h-auto sm:hidden cursor-pointer outline-none focus:outline-none"
      data-slide="next"
      aria-label="Next item"
    >
      <svg class="w-[4em]">
        <use href={"/sprites.svg#button-next"} />
      </svg>
    </button>
  );
}

export default function WelcomePortfolio({ slides, title }: Props) {
  const id = useId();

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div
      id={id}
      class="relative w-full h-full flex flex-col sm:flex-row justify-center border-t-1 border-solid border-[#ffffff38] sm:flex-wrap sm:h-screen"
    >
      <div class="text-center sm:px-[0.75rem] sm:flex sm:flex-col sm:w-[16.66666667%]">
        <hr class="hidden sm:block h-[2px] w-[42.266%] my-[3rem] ml-[20%] bg-white opacity-100" />
        <h2 class="font-sans font-bold text-[1.5rem] leading-[17px] tracking-[.2em] sm:tracking-normal uppercase w-full my-[60px] sm:writing-tb-rl sm:rotate-[-180deg] sm:text-portfolio-desk sxl:text-[2rem] sm:leading-[1.2] sm:font-heading-1 sm:lowercase sm:first-letter::uppercase sm:w-auto sm:m-0 sm:ml-[45%]">
          {title && title}
        </h2>
      </div>
      <div class="sm:w-[83.33333333%] sm:h-full sm:relative">
        <Slider
          class="gap-6 col-span-full row-start-2 row-end-5 sm:overflow-hidden sm:h-full"
          snap="flex h-full portfolio-transition justify-center items-center snap-center w-screen sm:border-l sm:border-solid sm:border-[#ffffff38]"
        >
          {slides?.map((slide) => (
            <div class="w-full h-full flex flex-col sm:flex-row sm:relative">
              <div class="sm:flex sm:flex-col sm:w-[41%] sm:border-r sm:border-solid sm:border-[#ffffff38]">
                <div class="w-full h-[20vh] text-center flex justify-evenly items-center sm:border-b sm:border-solid sm:border-[#ffffff38]">
                  <ButtonPrev />
                  <span dangerouslySetInnerHTML={{ __html: slide.logoSvg }} />
                  <ButtonNext />
                </div>
                <div class="flex h-[75%] justify-start sm:justify-evenly flex-col items-center my-auto mx-[10%]">
                  <p class="font-ltpro font-normal mb-[1rem] text-[1.5rem] leading-[2em]">
                    {slide.text}
                  </p>
                  <button class="hidden sm:block border-1 border-solid border-white rounded-[30px] cursor-pointer min-w-[13rem] self-start leading-[.5] h-[43px] py-[2%] px-[6%] hover:bg-[#30c0dc] hover:text-white hover:border-[#30c0dc] transition-btn">
                    <a class="font-sans font-heading-1 text-[1.5rem]" href="#">
                      Learn more
                    </a>
                  </button>
                </div>
              </div>
              <div class="h-full sm:w-[59%]">
                <div class="flex items-end h-full sm:relative sm:right-[22%]">
                  <img
                    class="self-end object-contain sm:absolute sm:right-0 sm:max-w-[100%] sm:h-auto sm:max-h-[100%]"
                    src={slide.image}
                    loading="lazy"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <SliderControllerJS interval={4000} rootId={id} />
    </div>
  );
}
