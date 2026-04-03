import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ProcessTimeline = () => {
  const { t, i18n } = useTranslation();
  const isNonEnglish = i18n.language !== 'en';

  const steps = [
    { emoji: '🌱', key: 'step1' },
    { emoji: '🌾', key: 'step2' },
    { emoji: '⚗️', key: 'step3' },
    { emoji: '📦', key: 'step4' },
    { emoji: '🚢', key: 'step5' },
  ];

  return (
    <section id="process" className="py-32 px-12 bg-spice-dark relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-24">
          <span className={`text-[10px] tracking-[4px] uppercase text-spice-gold mb-4 block ${isNonEnglish ? 'font-si' : ''}`}>{t('process.label')}</span>
          <h2 className={`font-display text-[clamp(44px,5vw,64px)] font-light leading-[1.1] text-spice-cream ${isNonEnglish ? 'font-si' : ''}`}
              dangerouslySetInnerHTML={{ __html: t('process.title') }} />
        </div>

        <div className="relative flex justify-between gap-5 flex-col md:flex-row">
          {/* Connecting Line */}
          <div className="absolute top-10 left-[5%] w-[90%] h-[1px] bg-gradient-to-r from-transparent via-spice-gold to-transparent opacity-30 hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex-1 flex flex-col items-center text-center relative group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6 relative z-10 backdrop-blur-xl transition-all duration-300 group-hover:bg-spice-gold group-hover:border-spice-gold group-hover:shadow-[0_0_30px_rgba(201,132,16,0.3)]"
              >
                {step.emoji}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-spice-crimson rounded-full flex items-center justify-center text-[10px] text-white font-bold leading-none shadow-lg">
                  {index + 1}
                </div>
              </motion.div>
              <h3 className={`font-display text-xl text-spice-cream mb-2 ${isNonEnglish ? 'font-si' : ''}`}>{t(`process.${step.key}`)}</h3>
              <p className={`text-[13px] text-white/40 leading-[1.7] max-w-[180px] mx-auto ${isNonEnglish ? 'font-si' : ''}`}>
                {t(`process.${step.key}_desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
