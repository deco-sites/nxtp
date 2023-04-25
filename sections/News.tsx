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
    <div class="mb-[40px] mt-[7%]">
      <h2 class="font-sans px-[0.75rem] font-bold text-2xl leading-[17px] text-center tracking-[.2em] uppercase w-full my-[60px]">
        {title}
      </h2>

      <div class="pl-[20px]" id={id}>
        <Slider class="gap-[20px]" snap="flex snap-center w-[62vw]">
          {news?.map((_new) => (
            <article class="group w-full relative text-left bg-news px-[2.5rem] py-[1.5rem] shadow-news rounded-[18px]">
              <a href={_new.link} target="_blank" rel="noreferrer">
                <span class="block font-sans font-bold text-[1.8rem] leading-[224.6%] text-[#b9b9b9]">
                  <span class="absolute bg-highlight w-[10px] h-[26px] left-[0] top-[11.69%] rounded-news-highlight">
                  </span>
                  News
                </span>
                <div class="mb-4">
                  <h3 class="font-ltpro font-semibold text-[2rem] leading-[224.6%] mb-[.5rem] text-black overflow-hidden whitespace-nowrap overflow-ellipsis w-full group-hover:text-highlight">
                    {_new.title}
                  </h3>
                  <p class="font-ltpro font-normal text-news-description text-[16.4531px] leading-[111.6%] overflow-ellipsis overflow-hidden w-full h-[3.2em] group-hover:text-news-description-active">
                    {_new.description}
                  </p>
                </div>
                <a
                  class="relative block text-[15.0511px] leading-[224.6%] font-heading-1 font-sans"
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
