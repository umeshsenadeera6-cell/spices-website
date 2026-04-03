import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppBubble = () => {
  return (
    <motion.a
      href="https://wa.me/94771234567?text=Hello%2C%20I%27m%20interested%20in%20your%20spices"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[900] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-3xl shadow-[0_8px_32px_rgba(37,211,102,0.4)]"
      whileHover={{ scale: 1.1 }}
      animate={{
        boxShadow: [
          '0 8px 32px rgba(37,211,102,0.4)',
          '0 8px 48px rgba(37,211,102,0.7)',
          '0 8px 32px rgba(37,211,102,0.4)',
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span role="img" aria-label="WhatsApp">💬</span>
    </motion.a>
  );
};

export default WhatsAppBubble;
