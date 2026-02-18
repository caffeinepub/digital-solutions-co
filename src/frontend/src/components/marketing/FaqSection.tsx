import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'Most projects take 2-4 weeks from start to finish, depending on complexity. A simple brochure website can be ready in 2 weeks, while more complex sites with custom features may take 4-6 weeks. We\'ll give you a clear timeline during our initial consultation.',
  },
  {
    question: 'How much does a website cost?',
    answer: 'Our pricing is transparent and tailored to your needs. A basic business website starts around $1,500, while more complex sites with custom features range from $3,000-$8,000. We offer flexible payment plans and will provide a detailed quote after understanding your requirements.',
  },
  {
    question: 'Do I need technical knowledge to manage my website?',
    answer: 'Not at all! We build user-friendly websites that you can easily update yourself. We provide training and documentation so you can add content, update images, and make simple changes. For anything technical, our support team is always here to help.',
  },
  {
    question: 'What happens after my website launches?',
    answer: 'We don\'t disappear after launch! We offer ongoing maintenance packages that include regular updates, security monitoring, backups, and technical support. You can also reach out anytime for content updates, new features, or troubleshooting.',
  },
  {
    question: 'Will my website work on mobile phones?',
    answer: 'Absolutely! Every website we build is fully responsive, meaning it looks great and works perfectly on all devices - smartphones, tablets, laptops, and desktops. Mobile-friendly design is standard in all our projects.',
  },
  {
    question: 'Can you help with website content and images?',
    answer: 'Yes! We can help you create compelling content that speaks to your audience. We also source professional stock images or can work with photos you provide. If you need professional photography, we can recommend trusted partners.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
