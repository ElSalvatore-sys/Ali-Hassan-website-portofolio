import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, ArrowRight, GraduationCap, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import DownloadCV from '../components/DownloadCV';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [statsRef, statsInView] = useInView({ triggerOnce: true });

  const achievements = [
    { value: '5', label: t('home.professionalCertificates'), icon: <Award className="w-6 h-6" /> },
    { value: '6+', label: t('home.completedProjects'), icon: <Target className="w-6 h-6" /> },
    { value: '3', label: t('home.programmingLanguages'), icon: <GraduationCap className="w-6 h-6" /> },
    { value: '100%', label: t('home.commitmentToLearning'), icon: <Target className="w-6 h-6" /> }
  ];

  const motivations = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: t('home.structuredLearning'),
      description: t('home.structuredLearningDesc')
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('home.careerFocus'),
      description: t('home.careerFocusDesc')
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('home.provenDedication'),
      description: t('home.provenDedicationDesc')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('home.title')}
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('home.subtitle')}
            </motion.p>

            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t('home.description')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/projects"
                className="btn-accent px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
              >
                <span>{t('home.viewProjects')}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <DownloadCV variant="outline" size="lg" />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Animation */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full opacity-10"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('home.achievements')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t('certificates.selfAcquiredKnowledge')}
            </p>
          </motion.div>

          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-blue-500 mb-3 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('home.whyRightChoice')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {motivations.map((motivation, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-500 mb-4">
                  {motivation.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {motivation.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {motivation.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('home.readyNextStep')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('home.readyNextStepDesc')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              <span>{t('home.getInTouch')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;