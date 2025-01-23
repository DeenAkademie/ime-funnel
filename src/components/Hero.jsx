import { useState } from 'react';

import MultiStepForm from './MultiStepForm/MultiStepForm';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative h-[50vh] flex items-center justify-center'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img
          src='/kaaba-hero.jpg' // Stellen Sie sicher, dass Sie ein ähnliches Bild mit goldenen Ornamenten haben
          alt='Kaaba Background'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/70' /> {/* Dunkler Overlay */}
      </div>

      {/* Content */}
      <div className='relative z-10 text-center px-4 max-w-5xl mx-auto'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'>
          IME REISEN
        </h1>
        <p className='text-xl md:text-2xl text-white/90 mb-8'>
          ERLEBE EIN UNBESCHREIBLICHES UMRA/HADSCH-ERLEBNIS
        </p>
        {/* CTA Button */}
        <div className='md:block'>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className='bg-[#8ac240] hover:bg-[#73a334] text-white px-8 py-6 rounded-full text-lg'>
                Jetzt Anmelden
              </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[900px] w-full h-[90vh] sm:h-[80vh] p-0 overflow-hidden'>
              <div className='h-full flex flex-col'>
                <DialogHeader className='px-6 pt-6 sm:px-8 sm:pt-8'>
                  <DialogTitle className='text-2xl sm:text-3xl font-bold'>
                    Anmeldeformular
                  </DialogTitle>
                </DialogHeader>
                <div className='flex-1 overflow-y-auto px-6 py-4 sm:px-8'>
                  <MultiStepForm onClose={() => setOpen(false)} />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Optional: Decorative Elements */}
      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent' />
    </div>
  );
};

export default Hero;
