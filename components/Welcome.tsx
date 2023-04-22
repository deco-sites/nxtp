import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { NavItem } from "../types/index.ts";
import Header from "../islands/Header.tsx";

export interface Props {
  mobileBackground: LiveImage;
  desktopBackground: LiveImage;
  logoSvg: string;
  navItems: NavItem[];
  navSocials: NavItem[];
  mainTitle: string;
  subTitle: string;
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
  }: Props,
) {
  const checkBackgroundMedia = (mobClasses: string, deskClasses = "") => {
    const isDesktop = window?.matchMedia?.("(min-width: 576px)")?.matches;

    if (isDesktop) {
      return deskClasses;
    }
    return mobClasses;
  };

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
        <div class="w-full h-full justify-between m-0 flex">
          <div class="flex flex-col">
            <div class="text-center sm:text-left x-p-calc">
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
