import { NavItem } from "../types/index.ts";

interface Props {
  items: NavItem[];
}

export default function Navbar({ items }: Props) {
  return (
    <>
      <button title="Open Menu" class="cursor-pointer btn-navbar-toggler">
        <span class="toggler-icon"></span>
      </button>
      <nav class="hidden">
        <ul>
          {items.map((item) => {
            return (
              <li>
                <a href={item.link}>{item.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
