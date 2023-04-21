import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { NavItem } from "../types/index.ts";
import Navbar from "../islands/Navbar.tsx";
import MenuButton from "../islands/MenuButton.tsx";
import Header from "../islands/Header.tsx";
import { useUI } from "../sdk/useUI.ts";

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
  const { displayMenu } = useUI();

  return (
    <div
      style={{
        backgroundImage: `url('${mobileBackground}')`,
        backgroundSize: "100vw 260vh",
        backgroundAttachment: "unset",
      }}
      class={`flex flex-col w-full h-full text-white`}
    >
      <Header logoSvg={logoSvg} navItems={navItems} navSocials={navSocials} />
      {
        /* <header class="flex justify-between header-navbar justify-center">
        {!displayMenu.value
          ? <a href="/" dangerouslySetInnerHTML={{ __html: logoSvg }} />
          : null}
        <MenuButton />
        <Navbar logoSvg={logoSvg} items={navItems} />
      </header> */
      }
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
