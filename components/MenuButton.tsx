import { useEffect } from "preact/hooks";
import { useUI } from "../sdk/useUI.ts";

export default function MenuButton() {
  const { displayMenu } = useUI();

  const checkDisplayMenu = (okClasses: string, failClasses = "") => {
    if (displayMenu.value) {
      return okClasses;
    }
    return failClasses;
  };

  useEffect(() => {
    if (displayMenu.value === true) {
      document.body.classList.add(
        "no-scroll",
      );
    } else if (displayMenu.value === false) {
      document.body.classList.remove(
        "no-scroll",
      );
    }
  }, [displayMenu.value]);

  return (
    <button
      onClick={() => {
        displayMenu.value = !displayMenu.value;
      }}
      title="Open Menu"
      class={checkDisplayMenu(
        "hidden",
        "cursor-pointer btn-navbar-toggler focus:outline-none sm:hidden",
      )}
    >
      <span class="toggler-icon"></span>
    </button>
  );
}
