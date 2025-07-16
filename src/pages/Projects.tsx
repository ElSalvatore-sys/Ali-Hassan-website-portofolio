import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, X, Code, Lightbulb, Wrench, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ProjectCard from '../components/ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
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

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: t('projects.hotelDigitalization'),
      description: t('projects.hotelDigitalizationDesc'),
      image: '/img/projects/hotel-digitalization.webp',
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
      title: t('projects.eaSolutions'),
      description: t('projects.eaSolutionsDesc'),
      image: '/img/projects/ea-solutions.webp',
      technologies: ['React', 'TypeScript', 'Tailwind', 'STT/TTS Pipelines', 'Wyoming Protocol', 'RAG'],
      category: 'web-dev',
      github: 'https://github.com/ElSalvatore-sys/ea-solutions',
      demo: 'https://ea-solutions.de',
      details: t('projects.eaSolutionsDetails'),
      learnings: [
        'Professionelles Webdesign für B2B-Kunden',
        'TypeScript für typsichere Entwicklung',
        'STT/TTS Pipeline-Integration',
        'Wyoming Protocol Implementation',
        'RAG-System für AI-Services'
      ],
      challenges: [
        'Professionelle Darstellung komplexer AI-Services',
        'Integration von STT/TTS-Technologien',
        'Wyoming Protocol-Implementierung',
        'RAG-System für Kundenberatung',
        'Responsive Design für Geschäftskunden'
      ],
      status: 'completed'
    },
    {
      id: 3,
      title: t('projects.falchiDental'),
      description: t('projects.falchiDentalDesc'),
      image: '/img/projects/dental-automation.webp',
      technologies: ['CAD/CAM', '3D Scanning', 'Automation', 'PowerShell', 'UniFi WLAN', 'Network Segmentation'],
      category: 'automation',
      github: 'https://github.com/ElSalvatore-sys/falchi-dental-automation',
      details: t('projects.falchiDetails'),
      learnings: [
        'CAD/CAM-Systeme und deren Integration',
        '3D-Scanning-Technologie und Datenverarbeitung',
        'Industrielle Automatisierungslösungen',
        'Netzwerkmodernisierung in Produktionsumgebungen',
        'PowerShell-Automatisierung für Workflows'
      ],
      challenges: [
        'Integration verschiedener CAD/CAM-Systeme',
        'Optimierung der 3D-Datenverarbeitung',
        'Sicherstellung der Produktionsqualität durch Automatisierung',
        'Netzwerksegmentierung für Sicherheit',
        'Workflow-Optimierung für Dentallabor'
      ],
      results: [
        t('projects.falchiResults'),
        'Erhöhte Patientenzufriedenheit',
        'Modernisierte Netzwerkinfrastruktur'
      ],
      status: 'completed'
    },
    {
      id: 4,
      title: t('projects.glennMiller'),
      description: t('projects.glennMillerDesc'),
      image: '/img/projects/music-school.webp',
      technologies: ['Next.js', 'Stripe', 'Azure OpenAI Chatbot', 'Google Calendar', 'SendGrid'],
      category: 'web-dev',
      github: 'https://github.com/ElSalvatore-sys/klavierschule-glennmiller',
      demo: 'https://klavierschule-glennmiller.de',
      website: 'https://klavierschule-glennmiller.de',
      details: t('projects.glennMillerDetails'),
      learnings: [
        'Next.js für moderne Webentwicklung',
        'Stripe-Integration für sichere Zahlungen',
        'Azure OpenAI Chatbot-Entwicklung',
        'Google Calendar API-Integration',
        'SendGrid E-Mail-Automatisierung'
      ],
      challenges: [
        'Sichere Zahlungsabwicklung implementieren',
        'AI-Chatbot für Kundensupport entwickeln',
        'Automatisierte Terminplanung erstellen',
        'Responsive Design für alle Geräte',
        'Analytics Dashboard implementieren'
      ],
      results: [
        t('projects.glennMillerResults'),
        'Vollständige digitale Transformation',
        'Live-Website erfolgreich implementiert'
      ],
      status: 'completed'
    },
    {
      id: 5,
      title: t('projects.eaAssistant'),
      description: t('projects.eaAssistantDesc'),
      image: '/img/projects/ea-assistant.webp',
      technologies: ['Docker', 'Whisper', 'RAG', 'Wyoming Protocol', 'LLMs', 'NLP', 'Computer Vision', 'n8n'],
      category: 'ai',
      github: 'https://github.com/ElSalvatore-sys/ea-assistant',
      details: t('projects.eaAssistantDetails'),
      learnings: [
        'Docker-Containerisierung für AI-Systeme',
        'Whisper STT-Integration',
        'RAG-Implementation für lokale LLMs',
        'Wyoming Protocol für Voice-Assistants',
        'Computer Vision und NLP-Integration'
      ],
      challenges: [
        'Lokale LLM-Optimierung für Performance',
        'Multimodale Verarbeitung (NLP + Computer Vision)',
        'Biometrische Spracherkennung implementieren',
        'Privacy-First AI-Architektur entwickeln',
        'n8n Workflow-Integration für Automatisierung'
      ],
      status: 'completed'
    },
    {
      id: 6,
      title: t('projects.aiWebsite'),
      description: t('projects.aiWebsiteDesc'),
      image: '/img/projects/ai-website.webp',
      technologies: ['LLM (ChatGPT)', 'HTML', 'CSS', 'JavaScript'],
      category: 'ai',
      github: 'https://github.com/ElSalvatore-sys/ai-hotel-generator',
      details: t('projects.aiWebsiteDetails'),
      learnings: [
        'LLM-Integration für Code-Generierung',
        'Prompt Engineering für optimale Ergebnisse',
        'AI-gestützte Webentwicklungs-Workflows',
        'Automatisierung von Frontend-Entwicklung'
      ],
      challenges: [
        'Qualitätssicherung bei AI-generiertem Code',
        'Optimierung von Prompts für bessere Ergebnisse',
        'Integration von AI in Entwicklungsworkflows',
        'Responsive Design durch AI generieren'
      ],
      status: 'completed'
    },
    {
      id: 7,
      title: t('projects.unitConverter'),
      description: t('projects.unitConverterDesc'),
      image: '/img/projects/unit-converter.webp',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'web-dev',
      github: 'https://github.com/ElSalvatore-sys/unit-converter',
      details: t('projects.unitConverterDetails'),
      learnings: [
        'Vanilla JavaScript für komplexe Berechnungen',
        'Responsive Webdesign-Prinzipien',
        'Benutzerfreundliche UI/UX-Gestaltung',
        'Mathematische Algorithmen implementieren'
      ],
      challenges: [
        'Präzise mathematische Berechnungen implementieren',
        'Benutzerfreundliche Oberfläche gestalten',
        'Cross-Browser-Kompatibilität sicherstellen',
        'Effiziente Datenverarbeitung optimieren'
      ],
      status: 'completed'
    },
    {
      id: 8,
      title: t('projects.languageApp'),
      description: t('projects.languageAppDesc'),
      image: '/img/projects/language-app.webp',
      technologies: ['React Native', 'AI/ML', 'I+1 Method', 'Interactive UI/UX', 'Curriculum AI'],
      category: 'ai',
      details: t('projects.languageAppDetails'),
      learnings: [
        'I+1 Lehrmethode für Spracherwerb',
        'AI-generierte Curriculum-Entwicklung',
        'React Native für Cross-Platform Apps',
        'Adaptive Learning-Algorithmen',
        'Interactive UI/UX für Bildungs-Apps'
      ],
      challenges: [
        'I+1 Methode in AI-System implementieren',
        'Curriculum für A1.1-C2 Level entwickeln',
        '960+ interaktive Lektionen erstellen',
        '1.9M+ Wörter intelligent strukturieren',
        'Personalisierte Lernpfade entwickeln'
      ],
      results: [
        'I+1 Lehrmethode implementiert',
        t('projects.languageAppFeatures'),
        'A1.1-C2 Level Abdeckung'
      ],
      status: 'in-development'
    }
  ];

  const categories = [
    { id: 'all', label: t('projects.allProjects'), icon: '📁' },
    { id: 'web-dev', label: t('projects.webDevelopment'), icon: '🌐' },
    { id: 'ai', label: t('projects.artificialIntelligence'), icon: '🤖' },
    { id: 'automation', label: t('projects.automation'), icon: '⚙️' },
    { id: 'system-integration', label: t('projects.systemIntegration'), icon: '🔧' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My implemented solutions – demonstrating the power of EAS in real-world applications. These projects were undertaken voluntarily, providing me the invaluable opportunity to launch my software and apply it in real-world scenarios.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                {/* Status Badge */}
                {selectedProject.status && (
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedProject.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-black'
                    }`}>
                      {selectedProject.status === 'completed' ? 'Abgeschlossen' : 'In Entwicklung'}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                  {selectedProject.details}
                </p>

                {/* Results Section */}
                {selectedProject.results && (
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Ergebnisse & Erfolge
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-green-700 dark:text-green-400 font-medium">{result}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Learnings */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Lightbulb className="w-5 h-5 text-yellow-500" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {t('projects.learnedSkills')}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {selectedProject.learnings.map((learning, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-400">{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Wrench className="w-5 h-5 text-orange-500" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {t('projects.challenges')}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-400">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Code className="w-5 h-5 text-blue-500" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {t('projects.technologiesUsed')}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                      <span>{t('projects.code')}</span>
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>{t('projects.demo')}</span>
                    </a>
                  )}
                  {selectedProject.website && (
                    <a
                      href={selectedProject.website}
                      className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>{t('projects.visitWebsite')}</span>
                    </a>
                  )}
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