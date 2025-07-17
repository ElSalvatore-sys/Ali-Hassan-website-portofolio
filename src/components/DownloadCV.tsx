import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface DownloadCVProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const DownloadCV: React.FC<DownloadCVProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '' 
}) => {
  const { t, language } = useLanguage();
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'success' | 'error'>('idle');

  const handleDownload = async () => {
    setDownloadState('downloading');
    
    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create download link for local PDF
      const link = document.createElement('a');
      link.href = '/cv-ali-hassan.pdf';
      link.download = `CV-Ali-Hassan-${language === 'de' ? 'Deutsch' : 'English'}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadState('success');
      
      // Reset state after 3 seconds
      setTimeout(() => setDownloadState('idle'), 3000);
    } catch (error) {
      setDownloadState('error');
      setTimeout(() => setDownloadState('idle'), 3000);
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600';
      case 'outline':
        return 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white';
      default:
        return 'bg-blue-500 text-white hover:bg-blue-600';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3';
    }
  };

  const getIcon = () => {
    switch (downloadState) {
      case 'downloading':
        return <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />;
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'error':
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <Download className="w-5 h-5" />;
    }
  };

  const getText = () => {
    switch (downloadState) {
      case 'downloading':
        return t('cv.downloading');
      case 'success':
        return t('cv.downloaded');
      case 'error':
        return t('cv.error');
      default:
        return t('cv.download');
    }
  };

  return (
    <motion.button
      onClick={handleDownload}
      disabled={downloadState === 'downloading'}
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${className}
        rounded-lg font-semibold transition-all duration-300 
        flex items-center space-x-2 shadow-lg hover:shadow-xl
        disabled:opacity-50 disabled:cursor-not-allowed
        transform hover:scale-105 active:scale-95
      `}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      aria-label={t('cv.downloadAria')}
    >
      {getIcon()}
      <span>{getText()}</span>
      {downloadState === 'idle' && (
        <FileText className="w-4 h-4 opacity-70" />
      )}
    </motion.button>
  );
};

export default DownloadCV;