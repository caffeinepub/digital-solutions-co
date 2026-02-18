import { Search, Palette, Code, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We learn about your business, goals, and target audience to create the perfect strategy.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Our designers create beautiful mockups that reflect your brand and engage your customers.',
  },
  {
    icon: Code,
    title: 'Build',
    description: 'We develop your website with clean code, ensuring it\'s fast, secure, and mobile-friendly.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'We test everything thoroughly and launch your website, making sure it performs perfectly.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support',
    description: 'We provide ongoing maintenance and support to keep your website running smoothly.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent approach to building your website
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
