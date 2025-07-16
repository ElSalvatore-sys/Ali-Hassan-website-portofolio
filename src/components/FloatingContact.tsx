import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const FloatingContact: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const contactOptions = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'E-Mail',
      action: () => window.open('mailto:ali.m.g.hassan01@gmail.com'),
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Anrufen',
      action: () => window.open('tel:+4917663062016'),
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Kontakt',
      action: () => {},
      color: 'bg-blue-500 hover:bg-blue-600',
      isLink: true,
      to: '/contact'
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 left-6 z-50 flex flex-col-reverse items-start space-y-reverse space-y-3"
        >
          {/* Contact Options */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex flex-col space-y-3 mb-3"
              >
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={option.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {option.isLink ? (
                      <Link
                        to={option.to!}
                        className={`${option.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2 group`}
                        onClick={() => setIsExpanded(false)}
                      >
                        {option.icon}
                        <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap">
                          {option.label}
                        </span>
                      </Link>
                    ) : (
                      <button
                        onClick={option.action}
                        className={`${option.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2 group`}
                      >
                        {option.icon}
                        <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap">
                          {option.label}
                        </span>
                      </button>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={t('contact.quickContact')}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;