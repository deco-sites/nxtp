import { signal } from "@preact/signals";

const displayMenu = signal(false);

const state = {
  displayMenu,
};

export const useUI = () => state;
