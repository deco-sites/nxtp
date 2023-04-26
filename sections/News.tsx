import { useId } from "preact/hooks";
import { Slider } from "../components/Slider.tsx";
import SliderControllerJS from "../islands/SliderJS.tsx";

export interface Props {
  title: string;
  news: {
    title: string;
    description: string;
    link: string;
  }[];
}

export default function News({ title, news }: Props) {
  const id = useId();

  return (
    <div class="mb-[40px] mt-[7%] sm:flex sm:flex-wrap sm:mb-[10em]">
      <div class="sm:w-[16.66666667%]">
        <hr class="hidden sm:block h-[3px] w-[42.266%] my-[3rem] ml-[20%] bg-current">
        </hr>
        <h2 class="font-sans px-[0.75rem] font-bold text-2xl leading-[17px] text-center tracking-[.2em] uppercase w-full my-[60px] sm:writing-tb-rl sm:rotate-[-180deg] sm:ml-[45%] sm:mt-[35px] sm:text-[2rem] sm:text-capitalize sm:font-heading-1 sm:mb-[.5rem] sm:w-auto sm:text-secondary sm:tracking-normal">
          {title}
        </h2>
      </div>

      <div class="pl-[20px] sm:w-[83.33333333%] sm:pr-[10em] sm:mt-[60px] sm:pl-[5%]" id={id}>
        <Slider class="gap-[20px]" snap="flex snap-center w-[62vw] sm:w-[30vw] sm:max-w-[429px]">
          {news?.map((_new) => (
            <article class="group w-full relative text-left bg-news px-[2.5rem] py-[1.5rem] shadow-news rounded-[18px] sm:bg-transparent sm:px-[24px] sm:py-0 sm:shadow-none sm:border-l-1 sm:border-black sm:rounded-none">
              <a href={_new.link} target="_blank" rel="noreferrer">
                <span class="block font-sans font-bold text-[1.8rem] leading-[224.6%] text-[#b9b9b9] sm:text-[.9em] sm:font-semibold sm:text-news-description sm:leading-[1.5]">
                  <span class="absolute bg-highlight w-[10px] h-[26px] left-[0] top-[11.69%] rounded-news-highlight sm:hidden">
                  </span>
                  News
                </span>
                <div class="mb-4">
                  <h3 class="font-ltpro font-semibold text-[2rem] leading-[224.6%] mb-[.5rem] text-black overflow-hidden whitespace-nowrap overflow-ellipsis w-full group-hover:text-highlight sm:text-[1.75rem] sm:font-heading-1 sm:leading-[1.2]">
                    {_new.title}
                  </h3>
                  <p class="font-ltpro font-normal text-news-description text-[16.4531px] leading-[111.6%] overflow-ellipsis overflow-hidden w-full h-[3.2em] group-hover:text-news-description-active sm:text-2xl sm:leading-[174.6%] sm:text-box">
                    {_new.description}
                  </p>
                </div>
                <a
                  class="sm:hidden relative block text-[15.0511px] leading-[224.6%] font-heading-1 font-sans"
                  href={_new.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="absolute bottom-0 left-[1%] w-[20px] border-b-[.62713px] border-solid border-black">
                  </span>
                  Read More
                  <span class="block absolute top-0 left-[40%] font-sans font-heading-1 text-[15.0511px] leading-[224.6%]">
                    {">"}
                  </span>
                </a>
              </a>
            </article>
          ))}
        </Slider>
        <SliderControllerJS rootId={id} />
      </div>
    </div>
  );
}
