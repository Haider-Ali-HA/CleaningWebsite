import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const phoneNumber = "15512555709"; // Replace with your actual number
  
  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  const quickResponses = [
    {
      question: "I need air duct cleaning",
      message: "Hi! I'm interested in your air duct cleaning services."
    },
    {
      question: "I need dryer vent cleaning",
      message: "Hello, I'd like information about dryer vent cleaning."
    },
    {
      question: "I need an estimate",
      message: "Hello! Can I get a quote for your services?"
    },
    {
      question: "What areas do you service?",
      message: "Hi! Do you serve my area?"
    }
  ];

  const handleQuickResponse = (message) => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
  };
  
  const handleDirectWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <>
      {/* Overlay for desktop only */}
      {!isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 lg:block hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      )}

      {/* Chat popup - positioned differently for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className={`fixed ${isMobile ? 'inset-x-2 bottom-24' : 'bottom-24 right-4'} bg-white rounded-2xl shadow-xl z-50 overflow-hidden`}
            style={{ maxWidth: isMobile ? 'calc(100% - 16px)' : '320px', width: isMobile ? 'calc(100% - 16px)' : '320px' }}
          >
            {/* Header */}
            <div className="bg-green-500 p-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">DuctBuddy Support</h3>
                <p className="text-sm opacity-90">Typically replies in 1 hour</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-green-600 rounded-full"
                aria-label="Close chat"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            {/* Quick responses */}
            <div className="p-4">
              <p className="text-gray-600 mb-4">Hello! How can we help you today?</p>
              <div className="space-y-2">
                {quickResponses.map((item, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleQuickResponse(item.message)}
                    className="w-full p-3 bg-gray-100 text-left rounded-lg hover:bg-gray-200 transition-colors text-gray-700 text-sm"
                  >
                    {item.question}
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-4 text-xs text-center text-gray-500">
                Or simply click the WhatsApp button below to start a chat
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp button - adjusted for mobile */}
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 500, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={isMobile ? handleDirectWhatsApp : () => setIsOpen(!isOpen)}
        className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-6 right-6'} bg-green-500 text-white rounded-full shadow-lg z-50 flex items-center justify-center`}
        style={{ 
          padding: isMobile ? '0.75rem' : '1rem',
          minWidth: isMobile ? '50px' : '60px',
          minHeight: isMobile ? '50px' : '60px'
        }}
        aria-label="Contact us on WhatsApp"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <FaWhatsapp size={isMobile ? 24 : 28} />
        </motion.div>
      </motion.button>
    </>
  );
};

export default WhatsAppButton;