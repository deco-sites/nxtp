import { useUI } from "../sdk/useUI.ts";
import MenuButton from "./MenuButton.tsx";
import Navbar from "./Navbar.tsx";
import { NavItem } from "../types/index.ts";
import MenuItems from "./MenuItems.tsx";

interface Props {
  logoSvg: string;
  navItems: NavItem[];
  navSocials: NavItem[];
}

export default function Header(props: Props) {
  const { displayMenu } = useUI();

  const checkDisplayMenu = (okClasses: string, failClasses = "") => {
    if (displayMenu.value) {
      return okClasses;
    }
    return failClasses;
  };

  return (
    <header class="flex justify-between header-navbar sm:p-[5rem] sm:m-0 justify-center sm:items-center">
      <a
        className={checkDisplayMenu(
          "opacity-0 pointer-events-none",
        )}
        onMouseEnter={(
          e,
        ) => {
          const el: HTMLElement | null = (e.target as HTMLAnchorElement)
            .querySelector(
              "svg path:nth-child(2)",
            );

          if (el) {
            el.style.fill = "#30c0dc";
          }
        }}
        onMouseLeave={(e) => {
          const el: HTMLElement | null = (e.target as HTMLAnchorElement)
            .querySelector(
              "svg path:nth-child(2)",
            );

          if (el) {
            el.style.fill = "#ffffff";
          }
        }}
        href="/"
        dangerouslySetInnerHTML={{ __html: props.logoSvg }}
      />

      <MenuItems
        items={props.navItems}
        socials={props.navSocials}
        active={props.navItems.findIndex((n) =>
          window?.location?.pathname === n.link
        )}
      />

      <MenuButton />
      <Navbar
        logoSvg={props.logoSvg}
        items={props.navItems}
        socials={props.navSocials}
      />
    </header>
  );
}
