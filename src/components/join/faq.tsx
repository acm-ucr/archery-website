import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[40vw] pt-[4vh] pb-[4vh]">
        <p className="text-center text-6xl font-extrabold text-black">
          Frequently Asked Questions
        </p>
      </div>
      <div className="w-[50vw] text-left">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="font-sans text-xl font-semibold text-[##444444]">
                Do I need experience or my own equipment?
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-l w-[40vw] text-black">
                No to both! The club will provide equipment to check out at
                every practice and teach our members. If you do want your own
                equipment in the future, our team can help you towards that.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <p className="font-sans text-xl font-semibold text-[##444444]">
                I can’t be at practice the whole time, is that okay?
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-l w-[40vw] text-black">
                Yes! Practice is about 4 hours so that you can go to and from
                class, work, etc. as you are able to. We really want you to come
                and shoot for as long you are able to and make the most of it.
                We do ask members to come early or stay after to help set-up and
                clean-up.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <p className="font-sans text-xl font-semibold text-[##444444]">
                Do you guys compete?
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-l w-[40vw] text-black">
                Yes we do! Over the last few years we have been growing our
                competitive team and is one of the most fun part of being apart
                of the archery club. Competitions are completely optional, but
                we encourage all our members to try out tournaments as it is a
                great way to meet and network with other schools
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default faq;
