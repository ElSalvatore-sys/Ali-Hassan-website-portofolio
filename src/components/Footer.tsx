import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Ali Hassan</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('home.subtitle')}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              {t('home.description')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              {t('footer.quickLinks')}
            </h4>
            <div className="space-y-2">
              <a href="/" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                {t('nav.home')}
              </a>
              <a href="/projects" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                {t('nav.projects')}
              </a>
              <a href="/about" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                {t('nav.about')}
              </a>
              <a href="/contact" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                {t('nav.contact')}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              {t('footer.connect')}
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ElSalvatore-sys"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ali-hassan"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ali.m.g.hassan01@gmail.com"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Ali Hassan. {t('footer.allRightsReserved')}.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-2 md:mt-0">
              {t('footer.madeWith')} <Heart className="w-4 h-4 mx-1 text-red-500" /> {t('footer.and')} React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;