import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useId } from "preact/hooks";
import { Slider } from "../components/Slider.tsx";
import SliderControllerJS from "../islands/SliderJS.tsx";

export interface Props {
    title: string;
    portfolio: { src: LiveImage; link: string; }[]
    viewcontent: { content: string; link: string; }
}

export default function Portfolio({ title, portfolio, viewcontent }: Props) {
    const mobileId = useId();
    return (

        /* Desktop View */
        <>

            <div class="hidden sm:flex my-[7%] mx-auto">

                <div class="w-[16.66666667%]">
                    <div class="border-t-2 border-t-black my-[3rem] mr-[0] ml-[20%] w-[42.266%]"></div>
                    <h2 class="writing-tb-rl rotate-[-180deg] ml-[45%] mt-[35px] text-portfoliosection">{title}</h2>
                </div>

                <div class="pl-[2%] pr-[10em] mt-[1.8%] w-[83.33333333%]">
                    <div class="flex flex-wrap items-center h-full">
                        {portfolio?.map((portfoliosection) => {
                            return (
                                <div class="w-[25%] m-auto text-center col-sm-3">
                                    <a class="flex justify-center" href={portfoliosection.link}>
                                        <img class="portfolio-filter w-[130px] h-[60px] hover:portfolio-filter-none"
                                            src={portfoliosection.src}
                                            width="130"
                                            height="60" />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                    <div class="flex items-center justify-end w-[100%] mt-[70px] text-right">
                        <a class="underline underline-offset text-sans font-heading-2 cursor-pointer hover:text-footer-hover" href={viewcontent.link}>{viewcontent.content}</a>
                        <svg class="ml-[0.5rem] w-[8px] h-[12px]">
                            <use href={"/sprites.svg#arrow-right-portfolio"} />
                        </svg>
                    </div>

                </div>
            </div>

            {/* Phone view */}

            <div id={mobileId} class="sm:hidden flex flex-col mt-[7%] mb-[40px]">

                <div class="w-[full] mt-[30px]">
                    <h2 class="text-portfoliosection-mobile font-bold tracking-[.2em] uppercase text-center my-[60px]">{title}</h2>
                </div>

                <div class="flex flex-col items-center mt-[25px] h-full w-full">
                    <div class="flex flex-wrap items-center w-full h-full">
                        <Slider snap="flex snap-center w-[180px] max-w-[429px]">{portfolio?.map((portfoliosection) => {
                            return (
                                <div class="m-auto w-full text-center bg-portfoliosection h-[167.333px] rounded-[18px] shadow-portfoliosm px-[10px] pt-[40px] pb-[10px]">
                                    <a class="flex flex-col items-center justify-center" href={portfoliosection.link}>
                                        <img class="mb-[10px] w-[130px] h-[60px]"
                                            src={portfoliosection.src}
                                            width="130"
                                            height="60" />

                                        <svg class="w-[38px] h-[38px]">
                                            <use href={"/sprites.svg#portfolio-slider-button"} />
                                        </svg>
                                    </a>
                                </div>
                            );
                        })}</Slider>
                    </div>
                    <div class="flex items-center justify-center w-full mt-[20px] text-center">
                        <a class="underline underline-offset text-sans text-[15px] font-heading-1" href={viewcontent.link}>{viewcontent}</a>
                        <svg class="ml-[0.5rem] w-[8px] h-[12px]">
                            <use href={"/sprites.svg#arrow-right-portfolio"} />
                        </svg>
                    </div>

                </div>
                <SliderControllerJS rootId={mobileId} />
            </div></>
    )
}