import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const isNonEnglish = i18n.language !== 'en';

  const reviews = [
    {
      text: "The quality of Ceylon Aura's cinnamon is unmatched. We've been sourcing from them for 8 years and the consistency is remarkable.",
      author: "Thomas Hofer",
      info: "Import Director, Austria",
      initials: "TH"
    },
    {
      text: "Their black pepper is simply the finest I have ever worked with. The aroma, the heat — it transforms every dish. A true luxury.",
      author: "Marie Kühn",
      info: "Executive Chef, Germany",
      initials: "MK"
    },
    {
      text: "Fast response, reliable export documentation, and the product quality speaks for itself. Ceylon Aura is our go-to partner.",
      author: "Ravi Nair",
      info: "Procurement Head, India",
      initials: "RN"
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-12 bg-spice-dark overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <span className={`text-[10px] tracking-[4px] uppercase text-spice-gold mb-4 block ${isNonEnglish ? 'font-si' : ''}`}>Client Stories</span>
          <h2 className={`font-display text-[clamp(44px,5vw,64px)] font-light leading-[1.1] text-spice-cream ${isNonEnglish ? 'font-si' : ''}`}>
            Trusted Around the <em>Globe</em>
          </h2>
        </div>

        <div className="flex gap-7 overflow-x-auto pb-10 scrollbar-hide">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex-shrink-0 w-[360px] glass-panel p-9 rounded-[24px] relative group hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-spice-gold-light text-6xl font-display opacity-20 absolute top-4 left-6 leading-none">“</div>
              <div className="text-spice-gold-light text-sm mb-4 tracking-[2px]">★★★★★</div>
              <p className="text-[15px] text-white/50 leading-[1.8] mb-8 relative z-10">
                {rev.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-spice-gold rounded-full flex items-center justify-center text-sm font-medium text-spice-dark">
                  {rev.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-spice-cream">{rev.author}</div>
                  <div className="text-[12px] text-white/40 tracking-[0.5px] uppercase">{rev.info}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
