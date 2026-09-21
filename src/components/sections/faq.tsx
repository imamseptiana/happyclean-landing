import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { faqItems } from "@/constants";

export function FaqSection() {
  return (
    <section className="container mx-auto px-6 py-16 sm:py-24" id="faq">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-brand-600">
          FAQ
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
          Pertanyaan yang sering diajukan
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 sm:text-lg">
          Jawaban singkat ini membantu Anda memahami layanan HappyClean dengan
          cepat.
        </p>
      </div>

      <div className="mt-12 rounded-[2rem] border border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-5">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqItems.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
