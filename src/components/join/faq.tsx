import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FAQdata } from "@/data/faq";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-10">
      <div className="w-[40vw]">
        <p className="text-center text-3xl font-extrabold text-black md:text-6xl">
          Frequently Asked Questions
        </p>
      </div>
      <div className="w-5/6 text-left md:w-[50vw]">
        <Accordion type="single" collapsible className="w-full">
          {FAQdata.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <p className="text-archery-grey-400 px-3 font-sans text-lg font-semibold md:text-xl">
                  {question}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="w-full px-3 text-sm text-black md:w-[40vw] md:text-base">
                  {answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
