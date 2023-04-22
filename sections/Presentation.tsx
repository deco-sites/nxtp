import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { NavItem, WelcomeCounter } from "../types/index.ts";
import Welcome from "../islands/Welcome.tsx";

export interface Props {
  mobileBackground: LiveImage;
  desktopBackground: LiveImage;
  logoSvg: string;
  navItems: NavItem[];
  navSocials: NavItem[];
  mainTitle: string;
  subTitle: string;
  counters: WelcomeCounter[];
}

export default function Presentation(
  props: Props,
) {
  return <Welcome {...props} />;
}
