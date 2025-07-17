import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, GraduationCap, MapPin, Languages, Calendar, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import DownloadCV from '../components/DownloadCV';

const About: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'motivation' | 'background' | 'goals'>('motivation');

  const languages = [
    { code: 'AR', name: 'Arabisch', level: t('about.nativeLanguage'), flag: '🇸🇦' },
    { code: 'EN', name: 'Englisch', level: 'C1 (' + t('about.fluent') + ')', flag: '🇬🇧' },
    { code: 'DE', name: 'Deutsch', level: 'B2 (' + t('about.advanced') + ')', flag: '🇩🇪' }
  ];

  const timeline = [
    {
      period: '2025-2027',
      title: t('about.plannedTraining'),
      subtitle: t('about.plannedTrainingSubtitle'),
      description: t('about.plannedTrainingDesc'),
      status: 'planned'
    },
    {
      period: '2024-2025',
      title: t('about.selfStudyCertifications'),
      subtitle: t('about.selfStudyCertificationsSubtitle'),
      description: t('about.selfStudyCertificationsDesc'),
      status: 'completed'
    },
    {
      period: '2024',
      title: t('about.practicalProjects'),
      subtitle: t('about.practicalProjectsSubtitle'),
      description: t('about.practicalProjectsDesc'),
      status: 'completed'
    }
  ];

  const tabContent = {
    motivation: {
      title: t('about.myMotivation'),
      content: `Technologie hat mich schon immer fasziniert. Die Möglichkeit, komplexe Probleme durch intelligente Lösungen zu vereinfachen, treibt mich täglich an. Eine Ausbildung zum Fachinformatiker für Systemintegration ist für mich der perfekte Weg, meine bereits erworbenen Kenntnisse zu vertiefen und gleichzeitig strukturiert neue Fähigkeiten zu erlernen.

      Ich schätze besonders die Kombination aus theoretischem Wissen und praktischer Anwendung, die eine Ausbildung bietet. Meine bisherigen Projekte haben mir gezeigt, dass ich nicht nur gerne lerne, sondern auch komplexe technische Herausforderungen erfolgreich bewältigen kann.`
    },
    background: {
      title: t('about.myBackground'),
      content: `Mein Weg in die IT begann mit einer tiefen Neugier für Automatisierung und intelligente Systeme. Durch Selbststudium und praktische Projekte habe ich mir fundierte Kenntnisse in verschiedenen Programmiersprachen und Technologien angeeignet.

      Besonders stolz bin ich auf meine Projekte im Bereich der KI-Integration und Systemautomatisierung. Diese haben mir nicht nur technische Fähigkeiten vermittelt, sondern auch gezeigt, wie wichtig strukturiertes Arbeiten und kontinuierliches Lernen sind.

      Meine mehrsprachigen Fähigkeiten und kulturelle Vielfalt sehe ich als zusätzliche Stärke, die mir hilft, in internationalen Teams zu arbeiten und verschiedene Perspektiven einzubringen.`
    },
    goals: {
      title: t('about.myGoals'),
      content: `Mein Hauptziel ist es, eine erfolgreiche Ausbildung zum Fachinformatiker für Systemintegration zu absolvieren und dabei sowohl theoretisches Wissen als auch praktische Erfahrungen zu sammeln. Ich möchte mich zu einem kompetenten IT-Fachmann entwickeln, der komplexe Systeme planen, implementieren und betreuen kann.

      Langfristig sehe ich mich als Experten für Systemintegration mit Spezialisierung auf moderne Technologien wie Cloud-Computing, Automatisierung und KI-Integration. Ich möchte Unternehmen dabei helfen, ihre IT-Infrastruktur zu optimieren und innovative Lösungen zu implementieren.

      Kontinuierliche Weiterbildung ist für mich selbstverständlich, da sich die IT-Branche ständig weiterentwickelt.`
    }
  };

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
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Content Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.entries(tabContent).map(([key, content]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === key
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {content.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {tabContent[activeTab].title}
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                {tabContent[activeTab].content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-8"
            >
              <div className="flex items-start space-x-4">
                <Quote className="w-8 h-8 text-blue-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-2">
                    "{t('about.quote')}"
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    - Ali Hassan
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.myJourney')}
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-4 h-4 rounded-full mt-2 flex-shrink-0 ${
                      item.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm text-blue-500 font-medium">{item.period}</span>
                        {item.status === 'planned' && (
                          <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                            {t('about.planned')}
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">{item.subtitle}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Languages className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('about.languages')}
                </h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.code} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-gray-700 dark:text-gray-300">{lang.name}</span>
                    </div>
                    <span className="text-blue-500 font-medium text-sm">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('about.location')}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Wiesbaden, Deutschland (65195)
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                {t('about.locationDesc')}
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('about.interests')}
                </h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span>🤖</span>
                  <span className="text-gray-600 dark:text-gray-400">{t('about.artificialIntelligence')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🔧</span>
                  <span className="text-gray-600 dark:text-gray-400">{t('about.systemIntegration')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🌐</span>
                  <span className="text-gray-600 dark:text-gray-400">{t('about.networkTechnology')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>⚙️</span>
                  <span className="text-gray-600 dark:text-gray-400">{t('about.automation')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;