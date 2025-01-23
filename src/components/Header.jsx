import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className='fixed w-full top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0 cursor-pointer'>
            <img
              src='/ime-logo.svg'
              alt='Hadsch & Umra Logo'
              className='h-12 w-auto'
            />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center justify-center space-x-8'>
            <button
              onClick={() => scrollToSection('about')}
              className='text-foreground/60 hover:text-foreground transition-colors'
            >
              Über uns
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className='text-foreground/60 hover:text-foreground transition-colors'
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className='text-foreground/60 hover:text-foreground transition-colors'
            >
              Kontakt
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 rounded-md hover:bg-accent'
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <button
              onClick={() => scrollToSection('about')}
              className='block w-full text-left px-3 py-2 rounded-md text-base hover:bg-accent'
            >
              Über uns
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className='block w-full text-left px-3 py-2 rounded-md text-base hover:bg-accent'
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className='block w-full text-left px-3 py-2 rounded-md text-base hover:bg-accent'
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
