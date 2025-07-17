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
    { value: '5', label: t('home.professionalCertificates'), icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: '6+', label: t('home.completedProjects'), icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: '3', label: t('home.programmingLanguages'), icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: '100%', label: t('home.commitmentToLearning'), icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const motivations = [
    {
      icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('home.structuredLearning'),
      description: t('home.structuredLearningDesc')
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('home.careerFocus'),
      description: t('home.careerFocusDesc')
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('home.provenDedication'),
      description: t('home.provenDedicationDesc')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Animated Background Elements - Simplified for mobile */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Geometric Shapes - Smaller on mobile */}
          <motion.div
            className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-blue-500/10 dark:bg-blue-400/10 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute top-32 right-4 sm:right-16 w-10 h-10 sm:w-16 sm:h-16 bg-purple-500/10 dark:bg-purple-400/10 rotate-45"
            animate={{
              rotate: [45, 225, 45],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-32 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-green-500/10 dark:bg-green-400/10 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute top-1/3 right-1/3 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500/15 dark:bg-yellow-400/15 rotate-12"
            animate={{
              rotate: [12, 192, 12],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating Particles - Responsive sizing */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-blue-400/20 dark:bg-blue-300/20 rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
          
          {/* Larger Floating Orbs - Hidden on very small screens */}
          <motion.div
            className="hidden sm:block absolute top-16 right-20 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-300/10 dark:to-purple-300/10 rounded-full blur-xl"
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="hidden sm:block absolute bottom-20 right-32 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-green-400/10 to-blue-400/10 dark:from-green-300/10 dark:to-blue-300/10 rounded-full blur-lg"
            animate={{
              y: [0, -20, 0],
              x: [0, -10, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Code-like Elements - Responsive text */}
          <motion.div
            className="hidden sm:block absolute top-1/4 left-16 text-blue-400/20 dark:text-blue-300/20 font-mono text-xs sm:text-sm"
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            &lt;code&gt;
          </motion.div>
          
          <motion.div
            className="hidden sm:block absolute bottom-1/3 right-24 text-purple-400/20 dark:text-purple-300/20 font-mono text-sm sm:text-lg"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            { }
          </motion.div>
        </div>
        
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-6 sm:px-4 z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('home.title')}
            </motion.h1>
            
            <motion.p
              className="text-lg xs:text-xl sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 font-light px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('home.subtitle')}
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t('home.description')}
            </motion.p>

            <motion.div
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/projects"
                className="btn-accent w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all text-sm sm:text-base"
              >
                <span>{t('home.viewProjects')}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              
              <div className="w-full xs:w-auto">
                <DownloadCV variant="outline" size="lg" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Floating Animation - Hidden on mobile for performance */}
        <motion.div
          className="hidden lg:block absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-500/15 to-purple-500/15 dark:from-blue-400/15 dark:to-purple-400/15 rounded-full blur-lg"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="hidden lg:block absolute bottom-16 left-20 w-28 h-28 bg-gradient-to-r from-green-500/10 to-blue-500/10 dark:from-green-400/10 dark:to-blue-400/10 rounded-full blur-xl"
          animate={{
            y: [0, -15, 0],
            x: [0, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 sm:px-4">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              {t('home.achievements')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">
              {t('certificates.selfAcquiredKnowledge')}
            </p>
          </motion.div>

          <motion.div
            ref={statsRef}
            className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-blue-500 mb-2 sm:mb-3 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-1 sm:mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 sm:px-4">
          <motion.h2
            className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-gray-900 dark:text-white px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('home.whyRightChoice')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {motivations.map((motivation, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-500 mb-3 sm:mb-4">
                  {motivation.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white">
                  {motivation.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                  {motivation.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-500">
        <div className="container mx-auto px-6 sm:px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              {t('home.readyNextStep')}
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              {t('home.readyNextStepDesc')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm sm:text-base"
            >
              <span>{t('home.getInTouch')}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;