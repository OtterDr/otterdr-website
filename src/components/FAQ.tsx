import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Does OtterDr fix my code automatically?",
    a: "No — OtterDr explains errors so you learn how to fix them. It's designed to be educational, not just a quick fix.",
  },
  {
    q: "Is my code stored anywhere?",
    a: "No. Code snippets are only sent to OpenAI for analysis and are not saved by the extension.",
  },
  {
    q: "Do I need an OpenAI API key?",
    a: "Yes, OtterDr requires an OpenAI API Key. You'll be prompted to enter it on first use, and it's stored securely in VS Code's SecretStorage.",
  },
  {
    q: "Can I change or remove my API key?",
    a: "Yes! Use the Command Palette (Cmd/Ctrl + Shift + P) and search for 'OtterDr: Update API Key' or 'OtterDr: Delete API Key'.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-card px-6"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
