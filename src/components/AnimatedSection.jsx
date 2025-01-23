import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const AnimatedSection = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check für Mobile Viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Desktop Animationen
  const desktopAnimations = {
    meccaX: useTransform(scrollYProgress, [0, 1], [0, -1500]), // Links oben
    meccaY: useTransform(scrollYProgress, [0, 1], [0, -800]),

    prayerX: useTransform(scrollYProgress, [0, 1], [0, -1500]), // Links unten
    prayerY: useTransform(scrollYProgress, [0, 1], [0, 800]),

    medinaX: useTransform(scrollYProgress, [0, 1], [0, 1500]), // Rechts oben
    medinaY: useTransform(scrollYProgress, [0, 1], [0, -800]),

    landscapeX: useTransform(scrollYProgress, [0, 1], [0, 1500]), // Rechts unten
    landscapeY: useTransform(scrollYProgress, [0, 1], [0, 800]),

    centerX: useTransform(scrollYProgress, [0, 1], [0, 200]), // Leicht nach rechts versetzt
    centerY: useTransform(scrollYProgress, [0, 1], [0, 100]),
  };

  // Mobile Animationen
  const mobileAnimations = {
    meccaY: useTransform(scrollYProgress, [0, 1], [0, -300]),
    prayerY: useTransform(scrollYProgress, [0, 1], [0, -600]),
    medinaY: useTransform(scrollYProgress, [0, 1], [0, -900]),
    landscapeY: useTransform(scrollYProgress, [0, 1], [0, -1200]),
    centerY: useTransform(scrollYProgress, [0, 1], [0, -1500]),
  };

  // Desktop Layout
  const DesktopLayout = () => (
    <>
      {/* Bilder Container */}
      <div className='absolute inset-0 flex items-center justify-center'>
        {/* Einzelne Bilder mit individuellen Animationen */}
        <motion.div
          style={{ x: desktopAnimations.meccaX, y: desktopAnimations.meccaY }}
          className='absolute z-20 w-[600px] h-[700px]'
        >
          <img
            src='/mecca-1.jpg'
            alt='Mecca'
            className='w-full h-full object-cover rounded-2xl shadow-xl'
          />
        </motion.div>

        <motion.div
          style={{ x: desktopAnimations.prayerX, y: desktopAnimations.prayerY }}
          className='absolute z-20 w-[600px] h-[700px] -mt-20 -ml-40'
        >
          <img
            src='/prayer-1.jpg'
            alt='Prayer'
            className='w-full h-full object-cover rounded-2xl shadow-xl'
          />
        </motion.div>

        <motion.div
          style={{ x: desktopAnimations.medinaX, y: desktopAnimations.medinaY }}
          className='absolute z-20 w-[600px] h-[700px] mt-20 ml-40'
        >
          <img
            src='/medina-1.jpg'
            alt='Medina'
            className='w-full h-full object-cover rounded-2xl shadow-xl'
          />
        </motion.div>

        <motion.div
          style={{
            x: desktopAnimations.landscapeX,
            y: desktopAnimations.landscapeY,
          }}
          className='absolute z-20 w-[600px] h-[700px]'
        >
          <img
            src='/landscape-1.jpg'
            alt='Landscape'
            className='w-full h-full object-cover rounded-2xl shadow-xl'
          />
        </motion.div>

        {/* Zentrales Bild */}
        <motion.div
          style={{
            x: desktopAnimations.centerX,
            y: desktopAnimations.centerY,
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]),
          }}
          className='absolute z-10 w-[700px] h-[800px]'
        >
          <img
            src='/kaaba-center.jpg'
            alt='Kaaba'
            className='w-full h-full object-cover rounded-2xl shadow-xl'
          />
        </motion.div>
      </div>
    </>
  );

  // Mobile Layout
  const MobileLayout = () => (
    <div className='flex flex-col items-center space-y-4'>
      <motion.div
        style={{ y: mobileAnimations.meccaY }}
        className='w-[280px] h-[320px]'
      >
        <img
          src='/mecca-1.jpg'
          alt='Mecca'
          className='w-full h-full object-cover rounded-xl shadow-lg'
        />
      </motion.div>

      <motion.div
        style={{ y: mobileAnimations.prayerY }}
        className='w-[280px] h-[320px]'
      >
        <img
          src='/prayer-1.jpg'
          alt='Prayer'
          className='w-full h-full object-cover rounded-xl shadow-lg'
        />
      </motion.div>

      <motion.div
        style={{ y: mobileAnimations.medinaY }}
        className='w-[280px] h-[320px]'
      >
        <img
          src='/medina-1.jpg'
          alt='Medina'
          className='w-full h-full object-cover rounded-xl shadow-lg'
        />
      </motion.div>

      <motion.div
        style={{ y: mobileAnimations.landscapeY }}
        className='w-[280px] h-[320px]'
      >
        <img
          src='/landscape-1.jpg'
          alt='Landscape'
          className='w-full h-full object-cover rounded-xl shadow-lg'
        />
      </motion.div>

      <motion.div
        style={{
          y: mobileAnimations.centerY,
        }}
        className='w-[300px] h-[340px]'
      >
        <img
          src='/kaaba-center.jpg'
          alt='Kaaba'
          className='w-full h-full object-cover rounded-xl shadow-lg'
        />
      </motion.div>
    </div>
  );

  return (
    <section
      ref={containerRef}
      className='relative min-h-screen overflow-hidden bg-[#F5F5F0] flex items-center justify-center'
    >
      {/* Zentrierte Überschrift */}
      <motion.div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full px-4'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-2xl md:text-6xl font-bold leading-tight'>
            Erleben Sie eine bereichernde Pilgerfahrt nach Mekka und Medina
          </h2>
        </div>
      </motion.div>

      {/* Bilder Container */}
      <div className='absolute inset-0 flex items-center justify-center'>
        {isMobile ? <MobileLayout /> : <DesktopLayout />}
      </div>
      {/* Subtiler Overlay für bessere Textlesbarkeit */}
      <div className='absolute inset-0 bg-[#F5F5F0]/20 z-20' />
    </section>
  );
};

export default AnimatedSection;
