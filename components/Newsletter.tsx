import { useUI } from "../sdk/useUI.ts"

export interface Props {
    newsletterLabel: string;
}

export default function Newsletter({ newsletterLabel }: Props) {
    const { displayNewsletter } = useUI();
    const checkDisplayNewsletter = (okClasses: string, failClasses = "") => {
        if (displayNewsletter.value) {
            return okClasses;
        }
        return failClasses;
    };
    return (

        <div class={checkDisplayNewsletter("modal-newsletter bg-footer-modal-overlay", "hidden")}>

            <div class="bg-transparent m-auto relative w-[75%] px-[3rem] py-[3rem] border-none">

                <div class="flex justify-around items-center">
                    <div class="w-[75%] bg-footer-modal rounded-[70px] px-[5%] py-[5%]">
                        <div>
                            <h2 class="text-sans text-footer-modal text-black uppercase tracking-[0.2em] font-main-title">
                                Newsletter
                            </h2>
                        </div>
                        <div>
                            <form>
                                <div>
                                    <div class="w-full border-none mx-[0] my-[0] relative inline-flex flex-col align-top min-w-0 mt-[2.2em] text-footer-modal-mini">
                                        <label class="text-footer-modal-red">
                                            {newsletterLabel}
                                        </label>
                                        <div class="mt-[16px]">
                                            <input type="text" class="modal-newsletter-input" /><span class="modal-input"></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-[1.5rem] flex justify-end">
                                    <button class="block w-full max-w-[235px] border-none bg-white h-[4.5rem] text-default-inverse cursor-pointer rounded-[40px]">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div>
                        <svg class="w-[42px] h-[42px]">
                            <use href={"/sprites.svg#close-icon-modal"} />
                        </svg>
                        <blockquote class="uppercase tracking-[.2em] text-footer-modal-mini text-black">Close</blockquote>
                    </div>
                </div>

            </div>

        </div>
    )

}