import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
    social: { text: string; link: string; }[];
    logo: string;
    certifieds: { src: LiveImage; width: number; height: number; }[];
    reservedRights: string;
}

export default function Footer({ social, logo, certifieds, reservedRights }: Props) {
    return (
        <div class="bg-footer h-[500px] text-default">

            <div class="h-full p-[5rem] flex-col">

                <div class="flex items-center justify-between h-[80%] border-b border-solid border-footer">
                    <a class="cursor-pointer" dangerouslySetInnerHTML={{ __html: logo }} />

                    <div class="flex justify-around items-center">
                        <button class="text-footer text-heading-1 mr-12 border border-solid border-white rounded-[30px] px-12 py-[0.375rem] cursor-pointer transition ease-in-out delay-50 hover:bg-white hover:text-default-inverse">Contact Us</button>
                        <button class="text-footer text-heading-1 flex items-center border border-solid border-white rounded-[30px] pl-12 pr-6 py-1 h-[3.5rem] cursor-pointer transition ease-in-out delay-50 hover:bg-white hover:text-default-inverse">Sign up for newsletter <img class="ml-12 h-[24px]" width={13} height={24} src="/arrow-right.svg" /></button>
                    </div>

                    <div class="flex items-center">
                        {social?.map((social) => {
                            return (
                                <h6 class="text-footer text-heading-1 m-[10px] mb-0 hover:text-footer-hover cursor-pointer">
                                    <a href={social.link}>{social.text}</a>
                                </h6>
                            )
                        })}
                    </div>
                </div>

                <div class="py-6 flex text-sans">
                    <div class="py-6 px-2 flex justify-center w-[75%]">
                        <span class="font-heading-2 relative right-[-15%]">{reservedRights}</span>
                    </div>

                    <div class="flex justify-end w-[25%]">
                        {certifieds?.map((certified) => {
                            return (
                                <div class="flex items-center mr-8 last:mr-0">
                                    <img
                                        src={certified.src}
                                        width={certified.width}
                                        height={certified.height}
                                    />
                                </div>

                            )
                        })}
                    </div>

                </div>
            </div>

        </div>
    )
}
