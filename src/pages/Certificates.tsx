import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar, CheckCircle, Briefcase, Building } from 'lucide-react';
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
  type: 'education' | 'work';
}

const Certificates: React.FC = () => {
  const { t } = useLanguage();

  const certificates: Certificate[] = [
    // Education Certificates
    {
      id: 1,
      title: 'Introduction to Web Development with HTML, CSS, JavaScript',
      issuer: 'IBM',
      date: 'Dec 5, 2024',
      badge: '/img/certificates/ibm-web-dev.jpg',
      verifyUrl: 'https://coursera.org/verify/21J9J7CXW1FT',
      description: 'Vollständige Einführung in Webentwicklungstechnologien mit HTML5, CSS3 und JavaScript-Grundlagen sowie praktischen Projekten.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Web Development', 'Responsive Design', 'DOM'],
      status: 'completed',
      type: 'education'
    },
    {
      id: 2,
      title: 'Generative AI: Introduction and Applications',
      issuer: 'IBM',
      date: 'May 22, 2025',
      badge: '/img/certificates/ibm-gen-ai.jpg',
      verifyUrl: 'https://coursera.org/verify/3IMG9Q3T78GD',
      description: 'Fortgeschrittener Kurs über generative KI-Technologien, einschließlich LLMs, Prompt Engineering und praktische Implementierungsstrategien.',
      skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Applications', 'GPT', 'DALL-E'],
      status: 'completed',
      type: 'education'
    },
    {
      id: 3,
      title: 'Introduction to Artificial Intelligence (AI)',
      issuer: 'IBM',
      date: 'May 17, 2025',
      badge: '/img/certificates/ibm-ai-intro.jpg',
      verifyUrl: 'https://coursera.org/verify/OXHK8IZ3I4MZ',
      description: 'Umfassende Einführung in KI-Konzepte, Machine Learning-Grundlagen und praktische Anwendungen in modernen Technologien.',
      skills: ['Machine Learning', 'AI Fundamentals', 'Neural Networks', 'Deep Learning', 'Computer Vision'],
      status: 'completed',
      type: 'education'
    },
    {
      id: 4,
      title: 'Technical Support Fundamentals',
      issuer: 'Google',
      date: 'Apr 15, 2025',
      badge: '/img/certificates/google-support.jpeg',
      verifyUrl: 'https://coursera.org/verify/QEFRBCGZDKQP',
      description: 'Grundlagenwissen im technischen Support, Troubleshooting-Methoden und bewährte Praktiken im Kundenservice.',
      skills: ['Technical Support', 'Troubleshooting', 'Customer Service', 'Problem Solving', 'Windows', 'Linux'],
      status: 'completed',
      type: 'education'
    },
    {
      id: 5,
      title: 'AI in Education: Leveraging ChatGPT for Teaching',
      issuer: 'Wharton University of Pennsylvania / OpenAI',
      date: 'Apr 15, 2025',
      badge: '/img/certificates/wharton-ai-education.jpeg',
      verifyUrl: 'https://coursera.org/verify/TW2VUM59E5TJ',
      description: 'Spezialisierter Kurs über den Einsatz von KI-Tools wie ChatGPT im Bildungsbereich und deren praktische Anwendung.',
      skills: ['AI in Education', 'ChatGPT', 'Educational Technology', 'Teaching Methods', 'Prompt Engineering'],
      status: 'completed',
      type: 'education'
    },
    // Work Certificates (Arbeitszeugnisse)
    {
      id: 6,
      title: 'Arbeitszeugnis - General Manager',
      issuer: 'Hotel am Kochbrunnen',
      date: '2024',
      badge: '/img/work-certificates/hotel-am-kochbrunnen-1.jpg',
      verifyUrl: '#',
      description: 'Arbeitszeugnis als General Manager im Hotel am Kochbrunnen, Wiesbaden. Verantwortung für alle Betriebsabläufe, Digitalisierung und Gästebetreuung.',
      skills: ['Hotel Management', 'Digitalisierung', 'Leadership', 'Customer Service', 'Operations', 'Team Management'],
      status: 'completed',
      type: 'work'
    },
    {
      id: 7,
      title: 'Arbeitszeugnis - General Manager (Zusatz)',
      issuer: 'Hotel am Kochbrunnen',
      date: '2024',
      badge: '/img/work-certificates/hotel-am-kochbrunnen-2.jpg',
      verifyUrl: '#',
      description: 'Zusätzliches Arbeitszeugnis mit detaillierter Bewertung der Leistungen und besonderen Projekten im Hotel am Kochbrunnen.',
      skills: ['Project Management', 'Innovation', 'Process Optimization', 'Quality Management', 'Strategic Planning'],
      status: 'completed',
      type: 'work'
    },
    {
      id: 8,
      title: 'Arbeitszeugnis',
      issuer: 'Falchi',
      date: '2023',
      badge: '/img/work-certificates/falchi.jpg',
      verifyUrl: '#',
      description: 'Arbeitszeugnis von Falchi mit Bewertung der Arbeitsleistung und erworbenen Kompetenzen.',
      skills: ['Professional Skills', 'Teamwork', 'Reliability', 'Work Ethics', 'Communication'],
      status: 'completed',
      type: 'work'
    }
  ];

  const educationCertificates = certificates.filter(cert => cert.type === 'education');
  const workCertificates = certificates.filter(cert => cert.type === 'work');

  const educationStats = [
    { value: '5', label: 'Bildungszertifikate', icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: '3', label: 'Top-Anbieter', icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: '100%', label: 'Verifizierungsrate', icon: <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: '20+', label: 'Neue Fähigkeiten', icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const workStats = [
    { value: '3', label: 'Arbeitszeugnisse', icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: '2', label: 'Arbeitgeber', icon: <Building className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: '100%', label: 'Positive Bewertungen', icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: '5+', label: 'Jahre Erfahrung', icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const renderCertificateSection = (certificates: Certificate[], title: string, stats: any[], sectionId: string) => (
    <div className="mb-16 sm:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
          {title}
        </h2>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg"
          >
            <div className="text-blue-500 mb-2 sm:mb-3 flex justify-center">
              {stat.icon}
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500 mb-1 sm:mb-2">{stat.value}</div>
            <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-tight">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certificate Cards */}
      <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6 lg:space-x-8">
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <img
                src={cert.badge}
                alt={`${cert.title} certificate`}
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-lg object-cover mx-auto sm:mx-0 shadow-md"
                onError={(e) => {
                const target = e.target as HTMLImageElement;
                // Hide the image if it fails to load
                  target.style.display = 'none';
                    // Show a fallback icon instead
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-icon')) {
                        const fallbackDiv = document.createElement('div');
                        fallbackDiv.className = 'fallback-icon w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto sm:mx-0 shadow-md';
                        fallbackDiv.innerHTML = cert.type === 'education' ? '🎓' : '📋';
                        fallbackDiv.style.fontSize = '2rem';
                        parent.appendChild(fallbackDiv);
                      }
                    }}
                  />
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <div className="mb-3 sm:mb-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white leading-tight">
                      {cert.title}
                    </h3>
                    {cert.status === 'completed' && (
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col xs:flex-row items-center justify-center sm:justify-start space-y-2 xs:space-y-0 xs:space-x-4 sm:space-x-6 text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2">
                    {cert.type === 'education' ? <Award className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 justify-center sm:justify-start">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs sm:text-sm rounded-full whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {cert.verifyUrl !== '#' && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors text-sm sm:text-base font-medium bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 w-full sm:w-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Zertifikat verifizieren</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
            Zertifikate & Arbeitszeugnisse
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
            Meine professionelle Weiterbildung und Berufserfahrung
          </p>
        </motion.div>

        {/* Education Certificates Section */}
        {renderCertificateSection(educationCertificates, 'Bildungszertifikate', educationStats, 'education')}

        {/* Work Certificates Section */}
        {renderCertificateSection(workCertificates, 'Arbeitszeugnisse', workStats, 'work')}

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 sm:p-8 lg:p-10"
        >
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Kontinuierliche Weiterentwicklung
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Meine Leidenschaft für Lernen und berufliche Entwicklung
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                Zielorientiert
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                Gezielte Weiterbildung in zukunftsrelevanten Technologien
              </p>
            </div>
            
            <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✅</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                Verifiziert
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                Alle Zertifikate sind durch renommierte Institutionen verifiziert
              </p>
            </div>
            
            <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                Zukunftsorientiert
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                Fokus auf moderne Technologien und Arbeitsweisen
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;