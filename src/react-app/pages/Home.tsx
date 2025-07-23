import { useEffect } from 'react';
import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import Services from '@/react-app/components/Services';
import About from '@/react-app/components/About';
import Testimonials from '@/react-app/components/Testimonials';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
