import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const InquirySystem = () => {
  const { t, i18n } = useTranslation();
  const isNonEnglish = i18n.language !== 'en';

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    product: '',
    quantity: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map id to state keys if they differ
    const keyMap = {
      'fname': 'name',
      'fcountry': 'country',
      'fproduct': 'product',
      'fqty': 'quantity',
      'femail': 'email',
      'fmsg': 'message'
    };
    setFormData(prev => ({ ...prev, [keyMap[id] || id]: value }));
  };

  const submitInquiry = (e) => {
    e.preventDefault();
    const { name, country, product, quantity, message } = formData;
    if(!name || !country) { alert('Please fill in your name and country.'); return; }
    
    const wa = `https://wa.me/94771234567?text=${encodeURIComponent(`*New Inquiry from Ceylon Aura Website*\nName: ${name}\nCountry: ${country}\nProduct: ${product || 'Not Specified'}\nQuantity: ${quantity || 'Not Specified'}kg\nMessage: ${message}`)}`;
    window.open(wa, '_blank');
  };

  return (
    <section id="inquiry" className="py-32 px-12 bg-gradient-to-b from-[#100C09] to-spice-dark relative">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* Inquiry Form */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="glass-panel p-12 rounded-[28px] relative overflow-hidden"
        >
          {/* Subtle Glow Overlay */}
          <div className="absolute -bottom-[40%] -left-[20%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(45,90,61,0.4)_0%,transparent_70%)] pointer-events-none" />

          <span className={`text-[10px] tracking-[4px] uppercase text-spice-gold mb-3 block ${isNonEnglish ? 'font-si' : ''}`}>{t('inquiry.label')}</span>
          <h2 className={`font-display text-[44px] font-light leading-[1.1] text-spice-cream mb-8 ${isNonEnglish ? 'font-si' : ''}`}
              dangerouslySetInnerHTML={{ __html: t('inquiry.title') }} />

          <form onSubmit={submitInquiry} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] tracking-[2px] uppercase text-white/50 mb-2">{t('inquiry.name')} *</label>
                <input type="text" id="fname" required placeholder="John Smith" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-spice-cream focus:border-spice-gold outline-none transition-all" />
              </div>
              <div>
                <label className="block text-[11px] tracking-[2px] uppercase text-white/50 mb-2">{t('inquiry.country')} *</label>
                <input type="text" id="fcountry" required placeholder="United Kingdom" value={formData.country} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-spice-cream focus:border-spice-gold outline-none transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] tracking-[2px] uppercase text-white/50 mb-2">{t('inquiry.product')}</label>
              <select id="fproduct" value={formData.product} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-spice-cream focus:border-spice-gold outline-none transition-all appearance-none">
                <option value="">Select a product...</option>
                <option>Ceylon True Cinnamon</option>
                <option>Black Pepper</option>
                <option>Cardamom</option>
                <option>Cloves</option>
                <option>Turmeric</option>
                <option>Nutmeg</option>
                <option>Mace</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] tracking-[2px] uppercase text-white/50 mb-2">{t('inquiry.quantity')}</label>
                <input type="number" id="fqty" placeholder="500" value={formData.quantity} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-spice-cream focus:border-spice-gold outline-none transition-all" />
              </div>
              <div>
                <label className="block text-[11px] tracking-[2px] uppercase text-white/50 mb-2">{t('inquiry.email')}</label>
                <input type="email" id="femail" placeholder="you@company.com" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-spice-cream focus:border-spice-gold outline-none transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] tracking-[2px] uppercase text-white/50 mb-2">{t('inquiry.message')}</label>
              <textarea id="fmsg" placeholder="Tell us about your requirements..." value={formData.message} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-spice-cream h-32 focus:border-spice-gold outline-none transition-all resize-none"></textarea>
            </div>

            <button type="submit" className="btn-primary w-full mt-3">
              {t('inquiry.submit')}
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="space-y-12"
        >
          <div>
            <span className={`text-[10px] tracking-[4px] uppercase text-spice-gold mb-4 block ${isNonEnglish ? 'font-si' : ''}`}>{t('inquiry.direct')}</span>
            <h3 className={`font-display text-[44px] font-light leading-[1.1] text-spice-cream mb-6 ${isNonEnglish ? 'font-si' : ''}`}
                dangerouslySetInnerHTML={{ __html: t('inquiry.sub_title') }} />
            <p className={`text-[15px] leading-[1.8] text-white/50 mb-10 ${isNonEnglish ? 'font-si' : ''}`}>
              {t('inquiry.sub_text')}
            </p>
          </div>

          <div className="space-y-5">
            {[
              { icon: <MapPin size={18} />, label: t('inquiry.name'), value: '42 Spice Garden Road, Kandy, Sri Lanka' },
              { icon: <Phone size={18} />, label: t('inquiry.email'), value: '+94 81 234 5678' },
              { icon: <Mail size={18} />, label: 'Email', value: 'exports@ceylonaura.com' },
              { icon: <Clock size={18} />, label: 'Hours', value: t('process.label') === 'ගොවිපළේ සිට අපනයනයට' ? 'සඳු–සිකු, 8AM–6PM IST' : 'Mon–Fri, 8AM–6PM IST' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-2xl group transition-all duration-300 hover:bg-white/10">
                <div className="w-10 h-10 bg-spice-gold rounded-full flex items-center justify-center text-spice-dark group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <strong className="block text-[11px] tracking-[1.5px] uppercase text-white/40 mb-1 font-light">{item.label}</strong>
                  <span className="text-[14px] text-white/70">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InquirySystem;
