import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, X, Code, Lightbulb, Wrench, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  github?: string;
  demo?: string;
  website?: string;
  details: string;
  learnings: string[];
  challenges: string[];
  results?: string[];
  status?: 'completed' | 'in-development';
}

const ProjectCard: React.FC<{ project: Project; index: number; onClick: () => void }> = ({ 
  project, 
  index, 
  onClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer group"
      onClick={onClick}
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
            +{project.technologies.length - 4} weitere
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex space-x-3">
          {project.github && (
            <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors" />
          )}
          {project.demo && (
            <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors" />
          )}
          {project.website && (
            <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors" />
          )}
        </div>
        
        {project.status === 'completed' && (
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full">
            Abgeschlossen
          </span>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: t('projects.hotelDigitalization'),
      description: t('projects.hotelDigitalizationDesc'),
      technologies: ['HS/3', 'QR/NFC', 'IoT', 'Docker', 'Python/Plotly', 'REST-APIs'],
      category: 'system-integration',
      github: 'https://github.com/ElSalvatore-sys/hotel-digitalization',
      details: t('projects.hotelDetails'),
      learnings: [
        'Integration komplexer Hotel-Management-Systeme',
        'QR/NFC-Technologie für kontaktlose Lösungen',
        'IoT-Implementierung für Energieoptimierung',
        'REST API-Entwicklung für Buchungs- und Zahlungssysteme',
        'Docker-Containerisierung für Produktionsumgebungen'
      ],
      challenges: [
        'Integration verschiedener Legacy-Systeme',
        'Sicherstellung der Datensicherheit bei Gästedaten',
        'Optimierung der Energieeffizienz durch IoT',
        'Entwicklung eines Self-Check-in Kiosks',
        'Implementierung eines Housekeeping-Bots'
      ],
      results: [
        t('projects.hotelResults'),
        'Vollständige digitale Transformation',
        'Erfolgreiche Live-Implementierung'
      ],
      status: 'completed'
    },
    {
      id: 2,
      title: 'EA Solutions - AI & IT Consulting Platform',
      description: 'Entwicklung einer umfassenden KI- und IT-Beratungsplattform für deutsche Unternehmen.',
      technologies: ['React', 'TypeScript', 'Node.js', 'AI/ML', 'Cloud Architecture'],
      category: 'web-development',
      website: 'https://ea-s.info',
      github: 'https://github.com/ElSalvatore-sys/ea-solutions',
      details: 'Vollständige Entwicklung einer professionellen Beratungsplattform für AI & IT Services mit Fokus auf deutsche Unternehmen. Implementierung modernster Technologien und KI-gestützter Lösungen.',
      learnings: [
        'Full-Stack Entwicklung mit React und Node.js',
        'AI/ML Integration in Business-Anwendungen',
        'Cloud-Architektur und Deployment',
        'Deutsche Compliance und DSGVO-Konformität',
        'UX/UI Design für B2B-Anwendungen'
      ],
      challenges: [
        'Skalierbare Architektur für wachsende Kundenanzahl',
        'Integration verschiedener AI-APIs',
        'DSGVO-konforme Datenverarbeitung',
        'Mehrsprachige Plattform (DE/EN)',
        'Performance-Optimierung für komplexe Workflows'
      ],
      results: [
        'Live-Plattform unter ea-s.info',
        'Positive Kundenfeedbacks',
        'Erfolgreiche Markteinführung'
      ],
      status: 'completed'
    },
    {
      id: 3,
      title: 'Portfolio Website - Modern React Application',
      description: 'Entwicklung einer modernen, responsiven Portfolio-Website mit React und TypeScript.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'web-development',
      github: 'https://github.com/ElSalvatore-sys/portfolio',
      details: 'Moderne Portfolio-Website mit Fokus auf Performance, Accessibility und responsive Design. Implementierung von Dark Mode, Mehrsprachigkeit und ansprechenden Animationen.',
      learnings: [
        'Moderne React Entwicklung mit TypeScript',
        'Responsive Design mit Tailwind CSS',
        'Animation mit Framer Motion',
        'Performance-Optimierung mit Vite',
        'Accessibility Best Practices'
      ],
      challenges: [
        'Cross-Browser Kompatibilität',
        'Mobile-First Design Approach',
        'SEO-Optimierung für Single Page Applications',
        'Performance bei komplexen Animationen',
        'Internationalisierung (i18n)'
      ],
      results: [
        'Fully responsive Website',
        'Optimierte Core Web Vitals',
        'Positive Benutzererfahrung'
      ],
      status: 'completed'
    },
    {
      id: 4,
      title: 'Hotel Management Digital Transformation',
      description: 'Digitale Transformation des Hotel am Kochbrunnen mit modernen Technologien.',
      technologies: ['Hotel Software', 'Digital Systems', 'Process Automation', 'Customer Experience'],
      category: 'management',
      details: 'Als General Manager führte ich die komplette digitale Transformation des Hotels durch, implementierte neue Technologien und optimierte alle Betriebsabläufe.',
      learnings: [
        'Digitale Transformation im Hotelwesen',
        'Change Management und Mitarbeiterführung',
        'Implementierung neuer Technologien',
        'Prozessoptimierung und Automation',
        'Gäste-Experience Management'
      ],
      challenges: [
        'Mitarbeiter-Schulung für neue Systeme',
        'Integration bestehender Hotelinfrastruktur',
        'Kostenkontrolle während der Transformation',
        'Aufrechterhaltung des Servicelevels',
        'Koordination mit Renovierungsarbeiten'
      ],
      results: [
        'Erfolgreiche Digitalisierung aller Prozesse',
        'Verbesserte Gäste-Zufriedenheit',
        'Optimierte Betriebseffizienz',
        'Positive Arbeitszeugnisse'
      ],
      status: 'completed'
    },
    {
      id: 5,
      title: 'German Language Learning App',
      description: 'Entwicklung einer KI-gestützten App zum Deutschlernen für internationale Nutzer.',
      technologies: ['Python', 'Streamlit', 'AI/NLP', 'Speech Recognition', 'Educational Technology'],
      category: 'ai-development',
      github: 'https://github.com/ElSalvatore-sys/german-tutor-app',
      details: 'KI-gestützte Anwendung zum interaktiven Deutschlernen mit Spracherkennung, personalisierten Lernpfaden und adaptivem Curriculum-Generator.',
      learnings: [
        'NLP und Speech Recognition Integration',
        'Educational Technology Konzepte',
        'Streamlit für schnelle Prototypentwicklung',
        'Personalisierte AI-Lernalgorithmen',
        'Multimodale Lernerfahrungen'
      ],
      challenges: [
        'Akkurate deutsche Spracherkennung',
        'Personalisierung für verschiedene Lernniveaus',
        'Engaging User Experience für Lernende',
        'Performance bei Real-time Speech Processing',
        'Adaptive Curriculum-Generierung'
      ],
      results: [
        'Funktionsfähiger Prototyp',
        'Positive Testnutzer-Feedback',
        'Basis für weitere EdTech-Projekte'
      ],
      status: 'completed'
    },
    {
      id: 6,
      title: 'Automated Workflow Systems',
      description: 'Entwicklung automatisierter Workflow-Systeme für verschiedene Unternehmensprozesse.',
      technologies: ['Python', 'Process Automation', 'APIs', 'Database Management', 'Cloud Services'],
      category: 'automation',
      details: 'Entwicklung und Implementierung automatisierter Systeme zur Optimierung von Geschäftsprozessen in verschiedenen Branchen.',
      learnings: [
        'Business Process Automation',
        'API Integration und Entwicklung',
        'Database Design und Management',
        'Cloud Service Integration',
        'Workflow Optimization Strategien'
      ],
      challenges: [
        'Integration in bestehende Unternehmenssysteme',
        'Skalierbarkeit für wachsende Anforderungen',
        'Fehlerbehandlung und Monitoring',
        'User Training und Change Management',
        'Security und Compliance Anforderungen'
      ],
      results: [
        'Erfolgreiche Implementierung in mehreren Unternehmen',
        'Signifikante Effizienzsteigerungen',
        'Positive ROI für Kunden'
      ],
      status: 'completed'
    }
  ];

  const categories = [
    { key: 'all', label: t('projects.all'), icon: <TrendingUp className="w-4 h-4" /> },
    { key: 'web-development', label: t('projects.webDevelopment'), icon: <Code className="w-4 h-4" /> },
    { key: 'ai-development', label: t('projects.aiDevelopment'), icon: <Lightbulb className="w-4 h-4" /> },
    { key: 'system-integration', label: t('projects.systemIntegration'), icon: <Wrench className="w-4 h-4" /> },
    { key: 'automation', label: 'Automation', icon: <Wrench className="w-4 h-4" /> },
    { key: 'management', label: 'Management', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { value: '6+', label: t('projects.completedProjects'), icon: <Code className="w-6 h-6" /> },
    { value: '10+', label: t('projects.technologies'), icon: <Wrench className="w-6 h-6" /> },
    { value: '100%', label: t('projects.clientSatisfaction'), icon: <TrendingUp className="w-6 h-6" /> },
    { value: '2+', label: 'Jahre Erfahrung', icon: <Lightbulb className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 sm:px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
            {t('projects.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16"
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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`flex items-center space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all text-xs sm:text-sm ${
                selectedCategory === category.key
                  ? 'bg-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - NO IMAGES */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        {/* Project Modal - NO IMAGES */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {t('projects.projectDetails')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {selectedProject.details}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>{t('projects.liveDemo')}</span>
                        </a>
                      )}
                      {selectedProject.website && (
                        <a
                          href={selectedProject.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Website</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {t('projects.keyLearnings')}
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {selectedProject.learnings.map((learning, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                          <span className="text-blue-500 mt-1">•</span>
                          <span className="text-sm leading-relaxed">{learning}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {t('projects.challenges')}
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                          <span className="text-orange-500 mt-1">•</span>
                          <span className="text-sm leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>

                    {selectedProject.results && (
                      <>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                          {t('projects.results')}
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.results.map((result, index) => (
                            <li key={index} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                              <span className="text-green-500 mt-1">•</span>
                              <span className="text-sm leading-relaxed">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;