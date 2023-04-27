import { signal } from "@preact/signals";

const displayMenu = signal(false);
const displayNewsletter = signal(false);

const state = {
  displayMenu,
  displayNewsletter,
};

export const useUI = () => state;
