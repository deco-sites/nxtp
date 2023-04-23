import { Head } from "$fresh/runtime.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { NavItem, TWelcomePortfolio, WelcomeCounter } from "../types/index.ts";
import Welcome from "../islands/Welcome.tsx";

export interface Props {
  /** @title Mobile presentation background */
  mobileBackground: LiveImage;

  /** @title Desktop presentation background */
  desktopBackground: LiveImage;

  /** @title Presentation logo in SVG string format */
  logoSvg: string;

  /** @title Navigation items */
  navItems: NavItem[];

  /** @title Navigation social media items */
  navSocials: NavItem[];

  /** @title Presentation main title */
  mainTitle: string;

  /** @title Presentation description/sub-title */
  subTitle: string;

  /** @title Counter items */
  counters: WelcomeCounter[];

  /** @title Presentation portfolio slider section */
  portfolio: TWelcomePortfolio;
}

export default function Presentation(
  props: Props,
) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={props.mobileBackground}
          as="image"
          media="(max-width: 575px)"
        />
        <link
          rel="preload"
          href={props.desktopBackground}
          as="image"
          media="(min-width: 576px)"
        />
      </Head>
      <Welcome
        {...props}
      />
    </>
  );
}
