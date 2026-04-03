import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t, i18n } = useTranslation();

  const isNonEnglish = i18n.language !== 'en';

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(45,90,61,0.2)_0%,rgba(13,22,16,0.1)_50%,transparent_100%)]" />

      <div className="relative z-10 text-center max-w-[900px] px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`text-[11px] tracking-[4px] uppercase text-spice-accent-light mb-6 ${isNonEnglish ? 'font-si' : ''}`}
        >
          {t('hero.eyebrow')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className={`font-display text-[clamp(56px,8vw,108px)] leading-[0.95] font-light text-spice-cream mb-3 drop-shadow-2xl ${isNonEnglish ? 'font-si' : ''}`}
          dangerouslySetInnerHTML={{ __html: t('hero.title') }}
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className={`text-[clamp(14px,1.5vw,17px)] text-white/60 tracking-[0.5px] leading-[1.7] max-w-[500px] mx-auto mb-12 ${isNonEnglish ? 'font-si' : ''}`}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a href="#products" className="btn-primary no-underline">
            {t('hero.cta_products')}
          </a>
          <a href="#inquiry" className="btn-ghost no-underline">
            {t('hero.cta_contact')}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[11px] tracking-[2px] uppercase"
      >
        <span>{t('hero.scroll')}</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-transparent to-spice-gold-light" 
          animate={{ scaleY: [0, 1, 0], originY: ['top', 'top', 'bottom'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
