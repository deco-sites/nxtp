import { useUI } from "../sdk/useUI.ts";
import { NavItem } from "../types/index.ts";

interface Props {
  items: NavItem[];
  socials: NavItem[];
  logoSvg: string;
}

export default function Navbar({ logoSvg, items, socials }: Props) {
  const { displayMenu } = useUI();

  const checkDisplayMenu = (okClasses: string, failClasses = "") => {
    if (displayMenu.value) {
      return okClasses;
    }
    return failClasses;
  };

  const closeMenu = () => {
    displayMenu.value = false;
  };

  return (
    <>
      <div
        class={checkDisplayMenu(
          "bg-mobile-menu-bg overflow-y-auto fixed top-0 z-50 w-full h-full visible transition-all duration-500 right-0 backdrop-blur",
          "fixed -right-full w-full h-full top-0 transition-all duration-500 pointer-events-none",
        )}
      >
        <div class="flex relative justify-center pl-[10%] pr-[5rem] pt-[2rem] pb-[2rem] my-[50px]">
          <a href="/" dangerouslySetInnerHTML={{ __html: logoSvg }} />
          <button
            type="button"
            aria-label="Close"
            onClick={closeMenu}
            class="btn-close btn-close-white outline-none focus:outline-none absolute right-[5%] p-[.5rem]"
          >
          </button>
        </div>
        <nav class="flex justify-end flex-col h-full">
          <ul>
            {items?.map((item) => (
              <li class="flex justify-end">
                <a
                  class="font-sans text-right font-main-title text-[19.4851px] leading-[45px] uppercase py-[0.5em] px-[2em]"
                  href={item.link}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <ul class="mt-[2.5rem] h-full flex flex-col self-end justify-around">
            {socials?.map((social) => (
              <li class="text-[1.5rem] h-[25%] border-socials mb-[1rem]">
                <a
                  href={social.link}
                  class="uppercase font-sans text-right pl-[1rem] pt-[0.5em] pr-[2em] pb-[0.5em] font-heading-1 text-[14.7586px] leading-[224.6%]"
                >
                  {social.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {
        /* <nav class="hidden">
        <ul>
          {items.map((item) => {
            return (
              <li>
                <a href={item.link}>{item.text}</a>
              </li>
            );
          })}
        </ul>
      </nav> */
      }
    </>
  );
}
