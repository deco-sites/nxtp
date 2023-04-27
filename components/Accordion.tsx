import type { HTML } from "deco-sites/std/components/types.ts";
import { useEffect, useRef, useState } from "preact/hooks";

interface AccordionProps {
  title: string;
  body: HTML;
}

const Accordion = ({ title, body }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.offsetHeight;
      setHeight(isOpen ? contentHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="w-full border-b border-accordions last-child:border-none pt-[1em] pr-[.8em] pb-[.8em] pl-[.3em] text-[1.5rem]">
      <button
        className="flex justify-between items-center w-full outline-none focus:outline-none"
        onClick={toggleAccordion}
      >
        <h2 className="font-sans text-2xl leading-[1.2] font-heading-1 text-left">
          {title}
        </h2>
        <svg
          style={isOpen
            ? {
              fill: "#e6e6e6",
            }
            : {}}
          class={`w-[1.25rem] h-[1.25rem] transition-transform transform ${
            isOpen ? "rotate-[-180deg]" : ""
          }`}
        >
          <use href={"/sprites.svg#arrow-accordion"} />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ height: `${height}px`, minHeight: "0" }}
      >
        <div
          ref={contentRef}
          className="accordion-content py-[1rem] px-[1.25rem] font-ltpro text-[1.5rem] leading-[174.6%] font-normal text-left"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  );
};

export default Accordion;
