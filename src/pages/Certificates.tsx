import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  verifyUrl: string;
  description: string;
  skills: string[];
  status: 'completed' | 'in-progress';
}

const Certificates: React.FC = () => {
  const { t } = useLanguage();

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Introduction to Artificial Intelligence (AI)',
      issuer: 'IBM',
      date: '05/2025',
      badge: '/img/certificates/ibm-ai-intro.png',
      verifyUrl: 'https://coursera.org/share/a04b65cadf53dd41eb05032876d49305',
      description: 'Umfassende Einführung in KI-Konzepte, Machine Learning-Grundlagen und praktische Anwendungen in modernen Technologien.',
      skills: ['Machine Learning', 'AI Fundamentals', 'Data Analysis', 'Python'],
      status: 'completed'
    },
    {
      id: 2,
      title: 'Generative AI: Introduction and Applications',
      issuer: 'IBM',
      date: '05/2025',
      badge: '/img/certificates/ibm-gen-ai.png',
      verifyUrl: 'https://coursera.org/share/f460f1bf54f8',
      description: 'Fortgeschrittener Kurs über generative KI-Technologien, einschließlich LLMs, Prompt Engineering und praktische Implementierungsstrategien.',
      skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Applications'],
      status: 'completed'
    },
    {
      id: 3,
      title: 'Technical Support Fundamentals',
      issuer: 'Google',
      date: '04/2025',
      badge: '/img/certificates/google-support.png',
      verifyUrl: 'https://coursera.org/share/ba932817cfda51d0a3b8c550e78272acfe2f98c362045af4147d',
      description: 'Grundlagenwissen im technischen Support, Troubleshooting-Methoden und bewährte Praktiken im Kundenservice.',
      skills: ['Technical Support', 'Troubleshooting', 'Customer Service', 'Problem Solving'],
      status: 'completed'
    },
    {
      id: 4,
      title: 'Introduction to Web Development with HTML, CSS, JavaScript',
      issuer: 'IBM',
      date: '12/2024',
      badge: '/img/certificates/ibm-web-dev.png',
      verifyUrl: 'https://coursera.org/share/28f2dcdd02ac42c9a8fa0f3e51c073b9',
      description: 'Vollständige Einführung in Webentwicklungstechnologien mit HTML5, CSS3 und JavaScript-Grundlagen sowie praktischen Projekten.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Web Development', 'Responsive Design'],
      status: 'completed'
    },
    {
      id: 5,
      title: 'AI in Education: Leveraging ChatGPT for Teaching',
      issuer: 'Wharton University of Pennsylvania / OpenAI',
      date: '03/2025',
      badge: '/img/certificates/wharton-ai-education.png',
      verifyUrl: 'https://coursera.org/share/69184ba5f906a215080d1d25e777c5b2',
      description: 'Spezialisierter Kurs über den Einsatz von KI-Tools wie ChatGPT im Bildungsbereich und deren praktische Anwendung.',
      skills: ['AI in Education', 'ChatGPT', 'Educational Technology', 'Teaching Methods'],
      status: 'completed'
    }
  ];

  const stats = [
    { value: '5', label: t('certificates.certificatesReceived'), icon: <Award className="w-6 h-6" /> },
    { value: '3', label: t('certificates.topProviders'), icon: <CheckCircle className="w-6 h-6" /> },
    { value: '100%', label: t('certificates.verificationRate'), icon: <ExternalLink className="w-6 h-6" /> },
    { value: '20+', label: t('certificates.newSkills'), icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('certificates.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('certificates.subtitle')}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="text-blue-500 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500"></div>
          
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? 'pr-8' : 'pl-8'
                }`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src={cert.badge}
                        alt={`${cert.title} badge`}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {cert.title}
                        </h3>
                        {cert.status === 'completed' && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span className="font-medium">{cert.issuer}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{t('certificates.verifyCertificate')}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
            </motion.div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {t('certificates.continuousEducation')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {t('certificates.continuousEducationDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t('certificates.goalOriented')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('certificates.goalOrientedDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t('certificates.verified')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('certificates.verifiedDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t('certificates.futureOriented')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('certificates.futureOrientedDesc')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;