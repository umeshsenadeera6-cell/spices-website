import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const isNonEnglish = i18n.language !== 'en';

  const items = [
    { emoji: '🌿', label: t('nav.about') === 'අප ගැන' ? 'කුළු බඩු උද්යාන' : 'Spice Gardens' },
    { emoji: '🌶️', label: t('nav.about') === 'අප ගැන' ? 'අස්වනු කාලය' : 'Harvest Season' },
    { emoji: '🏭', label: t('nav.about') === 'අප ගැන' ? 'සැකසීමේ ඒකකය' : 'Processing Unit' },
    { emoji: '📦', label: t('nav.about') === 'අප ගැන' ? 'අපනයනට සූදානම්' : 'Export Ready' },
    { emoji: '🌏', label: t('nav.about') === 'අප ගැන' ? 'ගෝලීය විෂය' : 'Global Reach' },
  ];

  return (
    <section id="gallery" className="py-32 px-12 bg-[#100C09]">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-14">
          <span className={`text-[10px] tracking-[4px] uppercase text-spice-gold mb-4 block ${isNonEnglish ? 'font-si' : ''}`}>Visual Journey</span>
          <h2 className={`font-display text-[clamp(44px,5vw,64px)] font-light leading-[1.1] text-spice-cream ${isNonEnglish ? 'font-si' : ''}`}>
            A Glimpse into Our <em>World</em>
          </h2>
        </div>

        <div className="grid grid-cols-12 auto-rows-[240px] gap-4">
          {[
            { col: 'span 4', row: 'span 2', bg: 'linear-gradient(135deg, #8B1A1A, #3D0D0D)' },
            { col: 'span 4', row: 'span 1', bg: 'linear-gradient(135deg, #C9841A, #5C3317)' },
            { col: 'span 4', row: 'span 1', bg: 'linear-gradient(135deg, #2D5A3D, #1A3320)' },
            { col: 'span 5', row: 'span 1', bg: 'linear-gradient(135deg, #5C3317, #8B1A1A)' },
            { col: 'span 3', row: 'span 1', bg: 'linear-gradient(135deg, #1A2A1A, #2D5A3D)' },
          ].map((style, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-[20px] overflow-hidden cursor-pointer group transition-all duration-400 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] ${style.col} ${style.row}`}
              style={{ background: style.bg }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[64px] opacity-60">
                {items[idx]?.emoji}
              </div>
              <div className="absolute bottom-6 left-6 font-display text-xl text-white drop-shadow-md">
                {items[idx]?.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
