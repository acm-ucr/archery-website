import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FAQdata } from "@/data/faq";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[40vw] py-9">
        <p className="text-center text-6xl font-extrabold text-black">
          Frequently Asked Questions
        </p>
      </div>
      <div className="w-[50vw] text-left">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-0"
        >
          {FAQdata.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <p className="text-archery-grey-400 px-3 font-sans text-xl font-semibold">
                  {question}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="w-[40vw] px-3 text-base text-black">{answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
