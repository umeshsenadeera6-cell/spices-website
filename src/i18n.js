import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "about": "About",
        "products": "Products",
        "inquiry": "Inquiry",
        "process": "Process",
        "contact": "Contact"
      },
      "hero": {
        "eyebrow": "Ceylon Aura · Est. 1987 · Sri Lanka",
        "title": "Pure Spices. <em>Elevated</em> Experience.",
        "subtitle": "Hand-harvested from the ancient highlands of Sri Lanka. Cultivated with centuries of tradition, exported with modern precision.",
        "cta_products": "Explore Products",
        "cta_contact": "Contact Us",
        "scroll": "Scroll"
      },
      "about": {
        "label": "Our Story",
        "title": "Rooted in the <em>Heart</em> of Ceylon",
        "text": "For over three decades, Ceylon Aura has been the trusted bridge between Sri Lanka's pristine spice gardens and discerning buyers across the globe. Every gram we export carries the soul of our island — its red earth, its monsoon rains, its generations of farming wisdom.",
        "years": "Years",
        "countries": "Countries",
        "organic": "Organic"
      },
      "products": {
        "label": "Our Collection",
        "title": "Premium <em>Spice</em> Selection",
        "search": "Search spices...",
        "all": "All",
        "spice": "Spices",
        "herb": "Herbs",
        "details": "Details",
        "origin": "Origin",
        "grade": "Grade",
        "form": "Form",
        "quote": "Request a Quote for This Product"
      },
      "inquiry": {
        "label": "Get In Touch",
        "title": "Request a <em>Quote</em>",
        "name": "Your Name",
        "country": "Country",
        "product": "Product of Interest",
        "quantity": "Quantity (kg)",
        "email": "Email",
        "message": "Message",
        "submit": "Send Inquiry →",
        "direct": "Direct Contact",
        "sub_title": "We'd Love to Hear From You",
        "sub_text": "Whether you're a retail buyer, wholesale distributor, or culinary brand — we're here to craft the perfect export solution for you."
      },
      "process": {
        "label": "Farm to Export",
        "title": "Our <em>Journey</em> to Your Table",
        "step1": "Cultivation",
        "step1_desc": "Grown naturally in highland Sri Lankan soil",
        "step2": "Harvest",
        "step2_desc": "Hand-picked at peak potency for maximum quality",
        "step3": "Processing",
        "step3_desc": "ISO-certified cleaning, grading, and preparation",
        "step4": "Packaging",
        "step4_desc": "Vacuum-sealed for freshness and long shelf life",
        "step5": "Export",
        "step5_desc": "Delivered to 42+ countries worldwide"
      },
      "footer": {
        "tagline": "Pure Sri Lankan spices, delivered to the world with care, precision, and centuries of heritage.",
        "made_in": "Made with ❤ in Sri Lanka"
      }
    }
  },
  si: {
    translation: {
      "nav": {
        "about": "අප ගැන",
        "products": "නිෂ්පාදන",
        "inquiry": "විමසීම",
        "process": "ක්රියාවලිය",
        "contact": "සම්බන්ධ වන්න"
      },
      "hero": {
        "eyebrow": "Ceylon Aura · 1987 සිට · ශ්රී ලංකාව",
        "title": "පිරිසිදු කුළු බඩු. <em>උසස්</em> අත්දැකීම.",
        "subtitle": "ශ්රී ලංකාවේ පුරාණ කඳුකරයෙන් අත් නෙළන ලද. සියවස් ගණනාවක් පැරණි සම්ප්රදාය සමඟ වගා කළ, නූතන නිරවද්යතාවෙන් අපනයනය.",
        "cta_products": "නිෂ්පාදන බලන්න",
        "cta_contact": "සම්බන්ධ වන්න",
        "scroll": "අනුචලනය"
      },
      "about": {
        "label": "අපගේ කතාව",
        "title": "<em>Ceylon</em> හදවතේ මූලිනි",
        "text": "දශක තුනකට වැඩි කාලයක් තිස්සේ, Ceylon Aura ශ්රී ලංකාවේ ආදිම කුළු බඩු වත්තවල් සහ ලොව පුරා ඇති විනිශ්චය ලත් ගැනුම්කරුවන් අතර විශ්වාසනීය පාලමක් ලෙස සිටී.",
        "years": "වසර",
        "countries": "රටවල්",
        "organic": "ජෛව"
      },
      "products": {
        "label": "අපගේ එකතුව",
        "title": "ශ්රේෂ්ඨ <em>කුළු බඩු</em> තෝරාගැනීම",
        "search": "සොයන්න...",
        "all": "සියල්ල",
        "spice": "කුළු බඩු",
        "herb": "ඖෂධ",
        "details": "විස්තර"
      },
      "inquiry": {
        "label": "සම්බන්ධ වන්න",
        "title": "<em>මිල</em> ඉල්ලන්න",
        "name": "ඔබේ නම",
        "country": "රට",
        "product": "කැමති නිෂ්පාදනය",
        "quantity": "ප්රමාණය (kg)",
        "email": "ඊමේල්",
        "message": "පණිවිඩය",
        "submit": "විමසීම යවන්න →",
        "direct": "ප්රත්යක්ෂ සම්බන්ධය"
      },
      "process": {
        "label": "ගොවිපළේ සිට අපනයනයට",
        "title": "ඔබේ මේසයට අපගේ <em>ගමන</em>",
        "step1": "වගාව",
        "step2": "අස්වනු",
        "step3": "සැකසීම",
        "step4": "ඇසුරුම්",
        "step5": "අපනයනය"
      }
    }
  },
  ta: {
    translation: {
      "nav": {
        "about": "எங்களை பற்றி",
        "products": "தயாரிப்புகள்",
        "inquiry": "விசாரணை",
        "process": "செயல்முறை",
        "contact": "தொடர்பு"
      },
      "hero": {
        "eyebrow": "Ceylon Aura · 1987 முதல் · இலங்கை",
        "title": "தூய மசாலா. <em>உயர்ந்த</em> அனுபவம்.",
        "subtitle": "இலங்கையின் பண்டைய மலைநாட்டிலிருந்து கைத்திரட்டப்பட்டது. நூற்றாண்டுகளின் மரபுடன் பயிரிடப்பட்டு, நவீன துல்லியத்துடன் ஏற்றுமதி.",
        "cta_products": "தயாரிப்புகளை காண்க",
        "cta_contact": "எங்களை தொடர்பு கொள்ளுங்கள்",
        "scroll": "உருட்டு"
      },
      "about": {
        "label": "எங்கள் கதை",
        "title": "Ceylon இன் <em>இதயத்தில்</em> வேரூன்றியது",
        "text": "மூன்று தசாப்தங்களுக்கும் மேலாக, Ceylon Aura இலங்கையின் தூய மசாலாத் தோட்டங்களுக்கும் உலகெங்கிலும் உள்ள நுண்ணுணர்வுள்ள வாங்குபவர்களுக்கும் இடையே நம்பகமான பாலமாக உள்ளது.",
        "years": "ஆண்டுகள்",
        "countries": "நாடுகள்",
        "organic": "கரிம"
      },
      "products": {
        "label": "எங்கள் சேகரிப்பு",
        "title": "உயரிய <em>மசாலா</em> தேர்வு",
        "search": "தேடு...",
        "all": "அனைத்தும்",
        "spice": "மசாலா",
        "herb": "மூலிகை",
        "details": "விவரங்கள்"
      },
      "inquiry": {
        "label": "தொடர்பில் இருங்கள்",
        "title": "<em>மேற்கோளை</em> கோரவும்",
        "name": "உங்கள் பெயர்",
        "country": "நாடு",
        "product": "ஆர்வமுள்ள தயாரிப்பு",
        "quantity": "அளவு (kg)",
        "email": "மின்னஞ்சல்",
        "message": "செய்தி",
        "submit": "விசாரணை அனுப்பு →",
        "direct": "நேரடி தொடர்பு"
      },
      "process": {
        "label": "பண்ணையிலிருந்து ஏற்றுமதி வரை",
        "title": "உங்கள் மேசைக்கு எங்கள் <em>பயணம்</em>",
        "step1": "சாகுபடி",
        "step2": "அறுவடை",
        "step3": "செயலாக்கம்",
        "step4": "பேக்கேஜிங்",
        "step5": "ஏற்றுமதி"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
