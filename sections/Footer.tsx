import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  social: { text: string; link: string }[];
  logo: string;
  certifieds: { src: LiveImage; width: number; height: number }[];
  reservedRights: string;
}

export default function Footer(
  { social, logo, certifieds, reservedRights }: Props,
) {
  return (
    <div class="block bg-footer h-[500px] text-default">
      <div class="h-full p-[5rem] flex-col">
        {/* Desktop view */}

        <div class="hidden lg:flex items-center justify-between h-[80%] border-b border-solid border-footer">
          <a
            class="cursor-pointer"
            dangerouslySetInnerHTML={{ __html: logo }}
          />

          <div class="flex justify-around items-center">
            <button class="text-footer text-heading-1 mr-12 border border-solid border-white rounded-[30px] px-12 py-[0.375rem] cursor-pointer transition ease-in-out delay-50 hover:bg-white hover:text-default-inverse">
              Contact Us
            </button>
            <button class="text-footer text-heading-1 flex items-center border border-solid border-white rounded-[30px] pl-12 pr-6 py-1 h-[3.5rem] cursor-pointer transition ease-in-out delay-50 hover:bg-white hover:text-default-inverse">
              Sign up for newsletter{" "}
              <svg class="ml-12 h-[24px]" width={13} height={24}>
                <use href={"/sprites.svg#arrow-right"} />
              </svg>
            </button>
          </div>

          <div class="flex items-center">
            {social?.map((social) => {
              return (
                <h6 class="text-footer text-heading-1 m-[10px] mb-0 hover:text-footer-hover cursor-pointer">
                  <a href={social.link}>{social.text}</a>
                </h6>
              );
            })}
          </div>
        </div>

        {/* Tablet view */}

        <div class="hidden sm:flex items-center justify-between h-[80%] border-b border-solid border-footer lg:hidden">
          <a
            class="cursor-pointer"
            dangerouslySetInnerHTML={{ __html: logo }}
          />

          <div class="flex flex-col justify-around items-center">
            <button class="text-footertablet leading-[1.5] text-heading-1 mb-4 mr-4 border border-solid border-white rounded-[30px] pr-12 pl-8 py-[0.375rem] cursor-pointer transition ease-in-out delay-50 hover:bg-white hover:text-default-inverse">
              Contact Us
            </button>
            <button class="text-footertablet leading-[1.5] text-heading-1 flex items-center border border-solid border-white rounded-[30px] pr-6 pl-8 pr-6 py-1 h-[3.5rem] cursor-pointer transition ease-in-out delay-50 hover:bg-white hover:text-default-inverse">
              Sign up for newsletter{" "}
              <svg class="ml-12 h-[24px]" width={13} height={24}>
                <use href={"/sprites.svg#arrow-right"} />
              </svg>
            </button>
          </div>

          <div class="flex flex-col items-center">
            {social?.map((social) => {
              return (
                <h6 class="text-footertablet text-heading-1 m-[10px] mb-0 hover:text-footer-hover cursor-pointer">
                  <a href={social.link}>{social.text}</a>
                </h6>
              );
            })}
          </div>
        </div>

        {/* Phone view */}

        <div class="flex flex-col items-center justify-between h-[80%] mb-[30px] sm:hidden">
          <a
            class="cursor-pointer"
            dangerouslySetInnerHTML={{ __html: logo }}
          />

          <div class="flex flex-col justify-around items-center">
            <button class="text-footertablet leading-[1.5] text-heading-1 mb-4 mr-4 rounded-[30px] pr-12 pl-8 py-[0.375rem] cursor-pointer transition ease-in-out delay-50 hover:bg-white hover:text-default-inverse">
              Contact Us
            </button>
            <button class="text-footertablet leading-[1.5] text-heading-1 flex items-center border border-solid border-white rounded-[30px] pr-6 pl-8 pr-6 py-1 h-[3.5rem] cursor-pointer transition ease-in-out delay-50 hover:bg-white hover:text-default-inverse">
              Sign up for newsletter{" "}
              <svg class="ml-12 h-[24px]" width={13} height={24}>
                <use href={"/sprites.svg#arrow-right"} />
              </svg>
            </button>
          </div>

          <div class="flex items-center">
            {social?.map((social) => {
              return (
                <h6 class="text-footertablet text-heading-1 m-[10px] mb-0 hover:text-footer-hover cursor-pointer">
                  <a href={social.link}>{social.text}</a>
                </h6>
              );
            })}
          </div>
        </div>

        {/* Desktop view */}
        <div class="hidden lg:flex py-6 text-sans">
          <div class="py-6 px-2 flex justify-center w-[75%]">
            <span class="font-heading-2 relative right-[-15%]">
              {reservedRights}
            </span>
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
              );
            })}
          </div>
        </div>

        {/* Tablet view */}
        <div class="hidden sm:flex py-6 text-sans lg:hidden">
          <div class="py-6 px-2 flex justify-center w-[75%]">
            <span class="font-heading-2 relative right-[-15%]">
              {reservedRights}
            </span>
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
              );
            })}
          </div>
        </div>

        {/* Phone view */}
        <div class="flex text-sans sm:hidden">
          <div class="flex justify-center w-full">
            {certifieds?.map((certified) => {
              return (
                <div class="flex items-center mr-8 last:mr-0">
                  <img
                    src={certified.src}
                    width={certified.width}
                    height={certified.height}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
