import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import {
  NavItem,
  TWelcomePortfolio,
  WelcomeCounter,
} from "../../types/index.ts";

import WelcomeBackground from "./WelcomeBackground.tsx";
import WelcomePortfolio from "./WelcomePortfolio.tsx";
import Header from "../../islands/Header.tsx";
import WelcomeNumbers from "./WelcomeNumbers.tsx";

export interface Props {
  mobileBackground: LiveImage;
  desktopBackground: LiveImage;
  logoSvg: string;
  navItems: NavItem[];
  navSocials: NavItem[];
  mainTitle: string;
  subTitle: string;
  counters: WelcomeCounter[];
  portfolio: TWelcomePortfolio;
}

export default function Welcome(
  {
    mainTitle,
    subTitle,
    mobileBackground,
    desktopBackground,
    logoSvg,
    navItems,
    navSocials,
    portfolio,
    counters,
  }: Props,
) {
  return (
    <div class="flex flex-col relative w-full h-full text-white">
      <WelcomeBackground
        mobileBackground={mobileBackground}
        desktopBackground={desktopBackground}
      />
      
      <Header logoSvg={logoSvg} navItems={navItems} navSocials={navSocials} />

      <div class="welcome-container sm:welcome-container-sm text-center">
        <div class="w-full h-full justify-between m-0 flex flex-wrap flex-col sm:flex-row sm:p-[1.5rem]">
          {/* Texts Section */}
          <div class="flex flex-col sm:w-[50%] sm:self-center">
            <div class="text-center sm:text-left x-p-calc">
              <h1
                class="font-sans text-mobile-title 2xl:text-[5.2rem] 3xl:text-[6.2rem] mb-[40px] font-main-title"
                dangerouslySetInnerHTML={{ __html: mainTitle }}
              />
              <span class="font-sans text-mobile-sub-title xl:text-[2.2rem] 2xl:text-[4.2rem] font-heading-2">
                {subTitle}
              </span>
            </div>
          </div>

          {/* Numbers Section */}
          <WelcomeNumbers counters={counters} />
        </div>
      </div>

      <WelcomePortfolio title={portfolio?.title} slides={portfolio?.slides} />
    </div>
  );
}
