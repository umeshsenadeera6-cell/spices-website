import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'products', href: '#products' },
    { key: 'inquiry', href: '#inquiry' },
    { key: 'process', href: '#process' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] px-12 py-5 flex items-center justify-between transition-all duration-400 ${
      scrolled ? 'bg-spice-dark/85 backdrop-blur-2xl border-b border-white/10' : ''
    }`}>
      <a href="#hero" className="font-display text-3xl font-semibold tracking-wider text-spice-gold-light decoration-none">
        Ceylon<span className="text-spice-cream font-light">Aura</span>
      </a>

      <ul className="hidden md:flex items-center gap-9 list-none">
        {navItems.map((item) => (
          <li key={item.key}>
            <a 
              href={item.href} 
              className={`text-[13px] tracking-[1.5px] uppercase no-underline transition-colors duration-300 hover:text-spice-gold-light ${
                i18n.language === 'si' ? 'font-si' : i18n.language === 'ta' ? 'font-ta' : ''
              }`}
            >
              {t(`nav.${item.key}`)}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <div className="flex gap-0.5 bg-white/5 border border-white/10 rounded-full p-1">
          {['en', 'si', 'ta'].map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`text-[11px] tracking-[1.5px] px-3 py-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                i18n.language === lang 
                  ? 'bg-spice-gold text-spice-dark font-medium' 
                  : 'text-white/60 hover:text-spice-gold-light'
              }`}
            >
              {lang === 'si' ? 'සිං' : lang === 'ta' ? 'தமிழ்' : 'EN'}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
