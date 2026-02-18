import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { HeroSection } from './components/marketing/HeroSection';
import { ServicesSection } from './components/marketing/ServicesSection';
import { ProcessSection } from './components/marketing/ProcessSection';
import { FaqSection } from './components/marketing/FaqSection';
import { ContactSection } from './components/marketing/ContactSection';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
