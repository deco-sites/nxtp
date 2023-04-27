import { useEffect } from "preact/hooks";
import { useUI } from "../sdk/useUI.ts";
import Newsletter from "./Newsletter.tsx";

export default function NewsletterButton() {
    const { displayNewsletter } = useUI();

    useEffect(() => {
        if (displayNewsletter.value === true) {
            document.body.classList.add(
                "no-scroll",
            );
        } else if (displayNewsletter.value === false) {
            document.body.classList.remove(
                "no-scroll",
            );
        }
    }, [displayNewsletter.value]);

    return (
        <>


            <button
                onClick={() => {
                    displayNewsletter.value = !displayNewsletter.value;
                }}
                title="Open Newsletter"
                class="group text-footer text-heading-1 flex items-center border border-solid border-white rounded-[30px] pl-12 pr-6 py-1 h-[3.5rem] cursor-pointer transition ease-in-out delay-50 hover:bg-white hover:text-default-inverse"
            >
                Sign up for newsletter{" "}
                <svg class="ml-12 h-[24px] group-hover:footer-arrow" width={13} height={24}>
                    <use href={"/sprites.svg#arrow-right"} />
                </svg>
            </button>
        </>
    );
}
