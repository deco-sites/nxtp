import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type NavItem = {
  link: string;
  text: string;
  showInDesktop: boolean;
};

export type WelcomeCounter = {
  number: number;
  text: string;
  usePlusIcon: boolean;
};

export type WelcomePortfolioSlide = {
  logoSvg: string;
  text: string;
  image: LiveImage;
};

export type TWelcomePortfolio = {
  title: string;
  slides: WelcomePortfolioSlide[];
};
