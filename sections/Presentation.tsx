import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { NavItem, TWelcomePortfolio, WelcomeCounter } from "../types/index.ts";
import Welcome from "../components/welcome/Welcome.tsx";

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
    <Welcome
      {...props}
    />
  );
}
