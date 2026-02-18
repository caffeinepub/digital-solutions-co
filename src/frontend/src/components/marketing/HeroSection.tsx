import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getWhatsAppLink1, getWhatsAppLink2, getEmailLink } from '@/lib/inquiryLinks';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Professional Websites for Growing Businesses
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                We build fast, affordable, and beautiful websites that help small and medium-sized businesses establish their online presence and grow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToContact} className="text-base">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" variant="outline" className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem asChild>
                    <a href={getWhatsAppLink1()} className="cursor-pointer">
                      +91 8095126443
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href={getWhatsAppLink2()} className="cursor-pointer">
                      +91 9663848939
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-soft">
              <img
                src="/assets/generated/hero-illustration.dim_1600x900.png"
                alt="Web development collaboration"
                className="w-full h-auto"
                width={1600}
                height={900}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
