import { Toaster } from 'sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Footer from './components/Footer';
import GuideSection from './components/GuideSection';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Toaster />
      <Header />
      <Hero />
      <CTA />
      <AnimatedSection />
      <GuideSection />
      <Footer />
    </div>
  );
}

export default App;
