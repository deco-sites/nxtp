import QuillText from "deco-sites/std/components/QuillText.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  questions: {
    title: string;
    answer: HTML;
  }[];
}

export default function FAQ({ title, questions }: Props) {
  return (
    <div class="m-auto mt-[7%] w-full">
      <div class="sm:w-[16.66666667%]">
        <hr class="hidden sm:block h-[3px] w-[42.266%] my-[3rem] ml-[20%] bg-current">
        </hr>
        <h2 class="font-sans px-[0.75rem] font-bold text-2xl leading-[17px] text-center tracking-[.2em] uppercase w-full my-[60px] sm:writing-tb-rl sm:rotate-[-180deg] sm:ml-[45%] sm:mt-[35px] sm:text-[2rem] sm:text-capitalize sm:font-heading-1 sm:mb-[.5rem] sm:w-auto sm:text-secondary sm:tracking-normal">
          {title}
        </h2>
      </div>

      <div class="mt-[25px] pl-[1.5rem] w-full pr-[0.75rem]">
        {questions.map((question, index, arr) => (
          <div
            class={index !== arr.length - 1
              ? "border-b-1 border-accordions border-solid"
              : ""}
          >
            <details class="w-full pt-[1em] pr-[0.8em] pb-[0.8em] pl-[0.3em] relative flex items-center font-sans font-heading-1 text-2xl">
              <summary class="list-none marker::hidden">
                {question.title}
              </summary>
              <div
                class="py-[1rem] px-[1.25rem] font-sans font-light"
                dangerouslySetInnerHTML={{ __html: question.answer }}
              />
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
