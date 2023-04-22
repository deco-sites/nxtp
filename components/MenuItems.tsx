import { NavItem } from "../types/index.ts";

interface Props {
  items: NavItem[];
  socials: NavItem[];
}

export default function MenuItems({ items, socials }: Props) {
  const checkActiveItem = (link: string) => {
    return window.location.pathname === link;
  };

  return (
    <nav class="flex mr-[5%] justify-end flex-grow-1">
      <ul class="flex list-none">
        {items?.map((item) =>
          item.showInDesktop && (
            <li>
              <a
                class={checkActiveItem(item.link)
                  ? "block font-sans text-hover uppercase py-[1em] px-[2em] text-[1.125rem] m-auto font-semibold"
                  : "block font-sans uppercase py-[1em] px-[2em] text-[1.125rem] m-auto font-semibold"}
                href={item.link}
              >
                {item.text}
              </a>
            </li>
          )
        )}
      </ul>
      <ul class="mt-[2.5rem] h-full flex flex-col self-end justify-around">
        {socials?.map((social) =>
          social.showInDesktop && (
            <li class="text-[1.5rem] h-[25%] border-socials mb-[1rem]">
              <a
                href={social.link}
                class="uppercase font-sans text-right pl-[1rem] pt-[0.5em] pr-[2em] pb-[0.5em] font-heading-1 text-[14.7586px] leading-[224.6%]"
              >
                {social.text}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
