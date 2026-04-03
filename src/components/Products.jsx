import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Globe, ChevronRight } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[2000] flex items-center justify-center p-6"
           onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
             initial={{ scale: 0.95, y: 20, opacity: 0 }}
             animate={{ scale: 1, y: 0, opacity: 1 }}
             exit={{ scale: 0.95, y: 20, opacity: 0 }}
             className="bg-[#160F0A] border border-white/10 rounded-[28px] max-w-[700px] w-full max-h-[90vh] overflow-y-auto relative p-12"
          >
            <button onClick={onClose} className="absolute top-6 right-6 bg-white/5 border border-white/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-spice-primary hover:border-spice-primary transition-all transition-colors duration-300">
              <X size={20} />
            </button>

            <div className={`w-full h-60 rounded-2xl mb-8 flex items-center justify-center text-[80px] drop-shadow-2xl overflow-hidden`}
                 style={{ background: `linear-gradient(135deg, ${product.color}DD, ${product.color}44)` }}>
              {product.emoji}
              {product.image && <img src={product.image} alt={product.name[i18n.language] || product.name.en} className="w-[150%] h-[150%] object-contain opacity-20 absolute" />}
            </div>

            <span className="text-[10px] tracking-[3px] uppercase text-spice-accent">{product.tag.toUpperCase()}</span>
            <h2 className="font-display text-[42px] font-light text-spice-cream mt-2 mb-4 leading-tight">
              {product.name[i18n.language] || product.name.en}
            </h2>
            <p className="text-[15px] text-white/50 leading-[1.8] mb-8">
              {product.desc[i18n.language] || product.desc.en}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <span className="text-[10px] tracking-[2px] uppercase text-white/40 block mb-1">{t('products.origin')}</span>
                <span className="font-display text-[20px] text-spice-accent-light leading-none">{product.origin}</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <span className="text-[10px] tracking-[2px] uppercase text-white/40 block mb-1">{t('products.grade')}</span>
                <span className="font-display text-[20px] text-spice-accent-light leading-none">{product.grade}</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <span className="text-[10px] tracking-[2px] uppercase text-white/40 block mb-1">{t('products.form')}</span>
                <span className="font-display text-[20px] text-spice-accent-light leading-none">{product.form}</span>
              </div>
            </div>

            <button 
               onClick={() => { onClose(); document.getElementById('inquiry').scrollIntoView({ behavior: 'smooth' }); }}
               className="btn-primary w-full"
            >
              {t('products.quote')}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProductCard = ({ product, index, onClick }) => {
  const { i18n, t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      onClick={() => onClick(product)}
      className="product-card group bg-white/5 border border-white/10 rounded-[24px] overflow-hidden cursor-pointer transition-all duration-400 hover:translate-y-[-8px] hover:border-spice-accent/30 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(168,184,40,0.1)]"
    >
      <div 
        className="h-[200px] w-full flex items-center justify-center text-[72px] relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${product.color}BB, ${product.color}55)` }}
      >
        <span className="relative z-10">{product.emoji}</span>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full blur-[30px] opacity-0 group-hover:opacity-40 transition-opacity duration-400"
             style={{ background: product.glow }} />
      </div>
      <div className="p-6">
        <span className="text-[10px] tracking-[2px] uppercase text-spice-accent mb-2 block">
          {product.tag === 'spice' ? t('products.spices') : t('products.herbs')}
        </span>
        <div className="font-display text-2xl font-normal text-spice-cream mb-2 leading-tight">
          {product.name[i18n.language] || product.name.en}
        </div>
        <div className="text-[13px] text-white/50 leading-[1.7] mb-5 h-[44px] overflow-hidden text-ellipsis">
          {(product.desc[i18n.language] || product.desc.en).substring(0, 90)}...
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[11px] tracking-[1px] text-spice-primary-light uppercase">📍 {product.origin}</span>
          <button className="bg-transparent border border-spice-accent text-spice-accent px-5 py-2 rounded-full text-[11px] tracking-[1px] uppercase transition-all duration-300 group-hover:bg-spice-accent group-hover:text-spice-dark">
            {t('products.details')}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const { t, i18n } = useTranslation();
  const [activeTag, setActiveTag] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productData = [
    {id:1,emoji:'🌿',color:'#2D5A3D',glow:'rgba(45,90,61,0.6)',tag:'spice',image:'/assets/cinnamon.png',
     name:{en:'Ceylon True Cinnamon',si:'ලංකා කුරුඳු',ta:'இலங்கை இலவங்கப்பட்டை'},
     desc:{en:'The finest grade of Cinnamomum verum, harvested from the wet zone districts of Sri Lanka.',si:'ශ්රී ලංකාවේ තෙත් කලාපීය දිස්ත්රික්කවලින් අස්වනු.',ta:'இலங்கையின் ஈரமான பகுதிகளிலிருந்து அறுவடை செய்யப்படுகிறது.'},
     origin:'Kandy & Matara',grade:'Alba, C5 Special',form:'Quills / Powder',minOrder:'100 kg'},
    {id:2,emoji:'⚫',color:'#1A1A1A',glow:'rgba(80,80,80,0.6)',tag:'spice',image:'/assets/pepper.png',
     name:{en:'Tellicherry Black Pepper',si:'ගම්මිරිස්',ta:'கருப்பு மிளகு'},
     desc:{en:'Premium bold pepper with complex heat and floral notes. Sourced from native cultivars grown on Sri Lankan slopes.',si:'ශ්රී ලංකාවේ බෑවුම් වල වගා කළ ශ්රේෂ්ඨ ගම්මිරිස්.',ta:'இலங்கை சரிவுகளில் வளர்க்கப்படும் சிறந்த மிளகு.'},
     origin:'Matale, Kandy',grade:'TGSEB',form:'Whole / Ground',minOrder:'250 kg'},
    {id:3,emoji:'💚',color:'#3D6B3A',glow:'rgba(61,107,58,0.6)',tag:'spice',image:'/assets/cardamom.png',
     name:{en:'Green Cardamom',si:'එනසාල්',ta:'பச்சை ஏலக்காய்'},
     desc:{en:'Aromatic, bold cardamom pods with a sweet-spicy profile. Perfect for teas and premium blends.',si:'සුවඳැති එනසාල් කරල්.',ta:'நறுமணமுள்ள ஏலக்காய் காய்கள்.'},
     origin:'Nuwara Eliya',grade:'AGB, 7mm+',form:'Whole Pods',minOrder:'50 kg'},
    {id:4,emoji:'🟤',color:'#5C2D0A',glow:'rgba(92,45,10,0.6)',tag:'spice',image:'/assets/cloves.png',
     name:{en:'Zanzibar Cloves',si:'කරාබුනැටි',ta:'கிராம்பு'},
     desc:{en:'Intensely aromatic cloves with high eugenol content, hand-harvested and sun-dried traditionally.',si:'සුවඳැති කරාබුනැටි.',ta:'நறுமணமிக்க கிராம்பு.'},
     origin:'Southern Province',grade:'HH Grade',form:'Whole / Powder',minOrder:'100 kg'},
    {id:5,emoji:'🟡',color:'#8B6914',glow:'rgba(201,132,26,0.6)',tag:'spice',image:'/assets/turmeric.png',
     name:{en:'Organic Turmeric',si:'කහ',ta:'கரிம மஞ்சள்'},
     desc:{en:'High-curcumin turmeric grown organically in the dry zone. Vivid golden color and medicinal power.',si:'වියළි කලාපයේ වගා කළ කහ.',ta:'இயற்கையான மஞ்சள்.'},
     origin:'Polonnaruwa',grade:'3% / 5% Curcumin',form:'Fingers / Powder',minOrder:'200 kg'},
    {id:6,emoji:'🫚',color:'#6B3A0A',glow:'rgba(107,58,10,0.6)',tag:'spice',image:'/assets/staranise.png',
     name:{en:'Ceylon Nutmeg & Mace',si:'සාදික්කා',ta:'ஜாதிக்காய்'},
     desc:{en:'Premium Myristica fragrans — both the nut and its precious mace, offering sweet complexity.',si:'සාදික්කා සහ වසාවාසි.',ta:'ஜாதிக்காய் மற்றும் ஜாதிப்பத்திரி.'},
     origin:'Galle, Matara',grade:'SS/SF Grade',form:'Whole / Broken',minOrder:'50 kg'},
    {id:7,emoji:'🌱',color:'#1A3320',glow:'rgba(26,51,32,0.6)',tag:'herb',
     name:{en:'Moringa Leaf Powder',si:'මුරුංගා කොළ කුඩු',ta:'முருங்கை இலை பொடி'},
     desc:{en:'Nutrient-dense moringa leaf, shade-dried and micro-ground. Rich in protein and antioxidants.',si:'මුරුංගා කොළ.',ta:'முருங்கை இலை.'},
     origin:'North Central Province',grade:'Organic Certified',form:'Fine Powder',minOrder:'25 kg'},
    {id:8,emoji:'🟠',color:'#8B3A0A',glow:'rgba(139,58,10,0.6)',tag:'herb',image:'/assets/redchilli.png',
     name:{en:'Dried Chilli',si:'වියළි මිරිස්',ta:'කැඩුණු මිරිස්'},
     desc:{en:'Fiery bird\'s eye chillies, sun-dried for concentrated heat and vibrant color.',si:'වියළි මිරිස්.',ta:'காய்ந்த மிளகாய்.'},
     origin:'Jaffna, Anuradhapura',grade:'SHU 100,000+',form:'Whole / Crushed',minOrder:'100 kg'},
  ];

  const filteredProducts = useMemo(() => {
    return productData.filter(p => {
      const matchTag = activeTag === 'all' || p.tag === activeTag;
      const matchSearch = p.name.en.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.name.si.includes(searchQuery) ||
                          p.name.ta.includes(searchQuery);
      return matchTag && matchSearch;
    });
  }, [activeTag, searchQuery]);

  return (
    <section id="products" className="py-24 px-12 bg-[#100C09]">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div>
            <span className="text-[10px] tracking-[4px] uppercase text-spice-accent mb-4 block leading-none">{t('products.label')}</span>
            <h2 className="font-display text-[clamp(44px,5vw,64px)] font-light leading-[1.1] text-spice-cream"
                dangerouslySetInnerHTML={{ __html: t('products.title') }} />
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-spice-accent transition-colors" />
              <input 
                type="text" 
                placeholder={t('products.search')}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-full py-3 pl-11 pr-6 text-sm text-spice-cream outline-none focus:border-spice-accent transition-all w-[240px]"
              />
            </div>
            {['all', 'spice', 'herb'].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-6 py-3 rounded-full text-[12px] tracking-[1px] uppercase cursor-pointer transition-all duration-300 ${
                  activeTag === tag ? 'bg-spice-accent text-spice-dark font-medium' : 'bg-white/5 border border-white/10 text-white/40 hover:border-white/30'
                }`}
              >
                {t(`products.${tag}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredProducts.map((p, i) => (
            <ProductCard 
              key={p.id} 
              product={p} 
              index={i} 
              onClick={(prod) => setSelectedProduct(prod)} 
            />
          ))}
        </div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

export default Products;
