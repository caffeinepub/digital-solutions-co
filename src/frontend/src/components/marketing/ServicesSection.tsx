import { Globe, FileText, Rocket, RefreshCw, Wrench, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Globe,
    title: 'Business brochure websites',
    description: 'Professional multi-page websites that showcase your business, services, and team. Perfect for establishing credibility and attracting new customers.',
  },
  {
    icon: FileText,
    title: 'Company profile websites',
    description: 'Clean, informative websites that tell your company story, highlight your expertise, and build trust with potential clients and partners.',
  },
  {
    icon: Rocket,
    title: 'Landing pages',
    description: 'High-converting single-page websites designed to capture leads, promote products, or drive specific actions for your marketing campaigns.',
  },
  {
    icon: RefreshCw,
    title: 'Website redesign',
    description: 'Modernize your outdated website with fresh design, improved user experience, and better performance to stay competitive.',
  },
  {
    icon: Wrench,
    title: 'Website maintenance and support',
    description: 'Keep your website running smoothly with regular updates, security patches, content changes, and technical support whenever you need it.',
  },
];

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer a complete range of web solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="flex flex-col hover:shadow-soft transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" onClick={scrollToContact} className="w-full justify-between group">
                    Get Started
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={scrollToContact}>
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
