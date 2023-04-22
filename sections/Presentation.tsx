import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { NavItem } from "../types/index.ts";
import Welcome from "../islands/Welcome.tsx";

export interface Props {
  mobileBackground: LiveImage;
  desktopBackground: LiveImage;
  logoSvg: string;
  navItems: NavItem[];
  navSocials: NavItem[];
  mainTitle: string;
  subTitle: string;
}

export default function Presentation(
  props: Props,
) {
  return <Welcome {...props} />;
}
