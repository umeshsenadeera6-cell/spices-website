import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-20 px-12 bg-[#160F0A] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-14">
          <div className="col-span-1 lg:col-span-2">
            <div className="font-display text-4xl text-spice-accent-light mb-4">CeylonAura</div>
            <p className="text-[14px] text-white/50 leading-[1.7] max-w-[260px]">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3 mt-6">
              {['📘', '📸', '💼'].map((emoji, idx) => (
                <div key={idx} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg cursor-pointer hover:bg-spice-accent hover:border-spice-accent transition-all duration-300">
                  {emoji}
                </div>
              ))}
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="text-[11px] tracking-[3px] uppercase text-spice-accent-light mb-5 font-normal">Products</h4>
            <ul className="list-none space-y-2.5">
              {['Ceylon Cinnamon', 'Black Pepper', 'Cardamom', 'Cloves', 'Turmeric'].map(p => (
                <li key={p}><a href="#products" className="text-[14px] text-white/50 no-underline hover:text-spice-accent-light transition-colors">{p}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="text-[11px] tracking-[3px] uppercase text-spice-accent-light mb-5 font-normal">Company</h4>
            <ul className="list-none space-y-2.5">
              <li><a href="#about" className="text-[14px] text-white/50 no-underline hover:text-spice-accent-light transition-colors">{t('nav.about')}</a></li>
              <li><a href="#process" className="text-[14px] text-white/50 no-underline hover:text-spice-accent-light transition-colors">{t('nav.process')}</a></li>
              <li><a href="#gallery" className="text-[14px] text-white/50 no-underline hover:text-spice-accent-light transition-colors">Gallery</a></li>
              <li><a href="#inquiry" className="text-[14px] text-white/50 no-underline hover:text-spice-accent-light transition-colors">Certifications</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/40 tracking-[0.5px]">© 2026 Ceylon Aura Exports (Pvt) Ltd. All rights reserved.</p>
          <p className="text-[12px] text-white/40 tracking-[0.5px] uppercase">{t('footer.made_in')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
