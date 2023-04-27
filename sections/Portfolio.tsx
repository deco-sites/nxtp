import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
    title: string;
    portfolio: { src: LiveImage; link: string; }[]
    viewcontent: { src: string; link: string; }
}

export default function Portfolio({ title, portfolio, viewcontent }: Props) {
    return (

        /* Desktop View */
        <>

            <div class="hidden sm:flex my-[7%]">

                <div class="w-[16.66666667%]">
                    <div class="border-t-2 border-t-black my-[3rem] mr-[0] ml-[20%] w-[42.266%]"></div>
                    <h2 class="rotate-[-90deg] text-portfoliosection">{title}</h2>
                </div>

                <div class="flex flex-col items-center pl-[2%] pr-[10em] mt-[1.8%] w-[83.33333333%]">
                    <div class="flex flex-wrap items-center h-full">
                        {portfolio?.map((portfoliosection) => {
                            return (
                                <div class="w-[25%] m-auto text-center col-sm-3">
                                    <a href={portfoliosection.link}>
                                        <img
                                            src={portfoliosection.src}
                                            width="130"
                                            height="60" />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                    <div class="w-[100%] mt-[70px] text-right">
                        <a class="underline underline-offset-[3px] text-sans font-heading-2" href="">{viewcontent}</a>
                    </div>

                </div>
            </div>

            {/* Phone view */}

            <div class="sm:hidden flex flex-col mt-[7%] mb-[40px]">

                <div class="w-[full] mt-[30px]">
                    <h2 class="text-portfoliosection-mobile font-bold tracking-[.2em] uppercase text-center my-[60px]">{title}</h2>
                </div>

                <div class="flex flex-col items-center mt-[25px] h-full w-full">
                    <div class="flex flex-wrap items-center h-full">
                        {portfolio?.map((portfoliosection) => {
                            return (
                                <div class="m-auto text-center bg-portfoliosection h-[167.333px] rounded-[18px] shadow-portfoliosm px-[10px] pt-[40px] pb-[10px]">
                                    <a href={portfoliosection.link}>
                                        <img
                                            src={portfoliosection.src}
                                            width="130"
                                            height="60" />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                    <div class="w-full mt-[20px] text-center">
                        <a class="underline underline-offset-[3px] text-sans text-[15px] font-heading-1" href="">{viewcontent}</a>
                    </div>

                </div>
            </div></>
    )
}