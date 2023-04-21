import { useUI } from "../sdk/useUI.ts";
import MenuButton from "./MenuButton.tsx";
import Navbar from "./Navbar.tsx";
import { NavItem } from "../types/index.ts";

interface Props {
  logoSvg: string;
  navItems: NavItem[];
  navSocials: NavItem[];
}

export default function Header(props: Props) {
  const { displayMenu } = useUI();

  return (
    <header class="flex justify-between header-navbar justify-center">
      {!displayMenu.value
        ? <a href="/" dangerouslySetInnerHTML={{ __html: props.logoSvg }} />
        : null}

      <MenuButton />
      <Navbar
        logoSvg={props.logoSvg}
        items={props.navItems}
        socials={props.navSocials}
      />
    </header>
  );
}
