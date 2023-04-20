import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Navbar from "../components/Navbar.tsx";
import { NavItem } from "../types/index.ts";

export interface Props {
  mobileBackground: LiveImage;
  desktopBackground: LiveImage;
  logoSvg: string;
  navItems: NavItem[];
  mainTitle: string;
  subTitle: string;
}

export default function Welcome(
  {
    mobileBackground,
    desktopBackground,
    logoSvg,
    navItems,
    mainTitle,
    subTitle,
  }: Props,
) {
  return (
    <div
      style={{
        backgroundImage: `url('${mobileBackground}')`,
        backgroundSize: "100vw 260vh",
        backgroundAttachment: "unset",
      }}
      class={`flex flex-col w-full h-full text-white`}
    >
      <header class="flex justify-between header-navbar justify-center">
        <a href="/" dangerouslySetInnerHTML={{ __html: logoSvg }} />
        <Navbar items={navItems} />
      </header>
      <div class="welcome-container sm:welcome-container-sm text-center">
        <div class="w-full h-full justify-between m-0 flex">
          <div class="flex flex-col">
            <div class="text-center sm:text-left">
              <h1
                class="font-sans text-mobile-title mb-[40px] font-main-title"
                dangerouslySetInnerHTML={{ __html: mainTitle }}
              />
              <span class="font-sans text-mobile-sub-title font-heading-2">
                {subTitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
