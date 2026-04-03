import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const { t, i18n } = useTranslation();
  const isNonEnglish = i18n.language !== 'en';

  return (
    <section id="about" className="py-32 px-12 bg-gradient-to-b from-spice-dark to-[#100C09] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Glass Card */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="glass-panel p-14 rounded-[24px] relative overflow-hidden"
        >
          {/* Subtle Glow Overlay */}
          <div className="absolute -top-[40%] -right-[20%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(45,90,61,0.4)_0%,transparent_70%)] pointer-events-none" />

          <span className={`text-[10px] tracking-[4px] uppercase text-spice-accent mb-4 block ${isNonEnglish ? 'font-si' : ''}`}>{t('about.label')}</span>
          <h2 className={`font-display text-[clamp(40px,5vw,64px)] font-light leading-[1.1] text-spice-cream mb-6 ${isNonEnglish ? 'font-si' : ''}`}
            dangerouslySetInnerHTML={{ __html: t('about.title') }}
          />
          <p className={`text-[16px] leading-[1.9] text-white/50 mb-12 ${isNonEnglish ? 'font-si' : ''}`}>
            {t('about.text')}
          </p>

          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
              <span className="font-display text-[42px] font-light text-spice-accent-light block leading-none">36+</span>
              <span className="text-[11px] tracking-[2px] uppercase text-white/40 block mt-2">{t('about.years')}</span>
            </div>
            <div className="text-center p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
              <span className="font-display text-[42px] font-light text-spice-accent-light block leading-none">42</span>
              <span className="text-[11px] tracking-[2px] uppercase text-white/40 block mt-2">{t('about.countries')}</span>
            </div>
            <div className="text-center p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
              <span className="font-display text-[42px] font-light text-spice-accent-light block leading-none">100%</span>
              <span className="text-[11px] tracking-[2px] uppercase text-white/40 block mt-2">{t('about.organic')}</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="relative h-[480px] rounded-[24px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1A3320] via-[#2D5A3D] to-[#A8B828] flex items-center justify-center">
            {/* Spice Circles / Background Decorations */}
            <div className="absolute w-[300px] h-[300px] border-2 border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[200px] h-[200px] border border-white/10 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
            <img 
               src="/assets/cinnamon.png" 
               alt="Ceylon Spices" 
               className="w-full h-full object-contain relative z-10 p-12 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
