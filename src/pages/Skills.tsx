import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Wrench, Brain, Server } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Skill {
  name: string;
  level: string;
  color: string;
  icon: string;
  category: string;
}

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true });

  const skills: Skill[] = [
    { name: 'HTML/CSS', level: 'Fortgeschritten', color: '#3B82F6', icon: '🌐', category: 'Frontend' },
    { name: 'JavaScript', level: 'Fortgeschritten', color: '#F59E0B', icon: '⚡', category: 'Frontend' },
    { name: 'Python', level: 'Fortgeschritten', color: '#10B981', icon: '🐍', category: 'Backend' },
    { name: 'React', level: 'Fortgeschritten', color: '#06B6D4', icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', level: 'Fortgeschritten', color: '#84CC16', icon: '🟢', category: 'Backend' },
    { name: 'Docker', level: 'Fortgeschritten', color: '#0EA5E9', icon: '🐳', category: 'DevOps' },
    { name: 'SQL/NoSQL', level: 'Fortgeschritten', color: '#8B5CF6', icon: '🗄️', category: 'Database' },
    { name: 'LLMs/AI', level: 'Fortgeschritten', color: '#F97316', icon: '🤖', category: 'AI/ML' },
    { name: 'n8n', level: 'Fortgeschritten', color: '#EF4444', icon: '🔗', category: 'Automation' },
    { name: 'Networking', level: 'Grundlagen', color: '#06B6D4', icon: '🌐', category: 'Infrastructure' },
    { name: 'Git/GitHub', level: 'Fortgeschritten', color: '#6B7280', icon: '📝', category: 'DevOps' },
    { name: 'Linux', level: 'Grundlagen', color: '#1F2937', icon: '🐧', category: 'Infrastructure' }
  ];

  const skillCategories = [
    {
      title: t('skills.frontendDevelopment'),
      icon: <Code className="w-6 h-6" />,
      color: 'bg-blue-500',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript'],
      description: t('skills.frontendDesc')
    },
    {
      title: t('skills.backendDatabases'),
      icon: <Database className="w-6 h-6" />,
      color: 'bg-green-500',
      skills: ['Python', 'Node.js', 'SQL/NoSQL', 'MongoDB'],
      description: t('skills.backendDesc')
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-purple-500',
      skills: ['LLMs', 'RAG', 'Whisper/STT', 'OpenAI APIs'],
      description: 'KI-Integration, Large Language Models und Machine Learning-Anwendungen'
    },
    {
      title: t('skills.devopsCloud'),
      icon: <Cloud className="w-6 h-6" />,
      color: 'bg-orange-500',
      skills: ['Docker', 'Git', 'Linux', 'Deployment'],
      description: t('skills.devopsDesc')
    },
    {
      title: t('skills.systemIntegration'),
      icon: <Wrench className="w-6 h-6" />,
      color: 'bg-red-500',
      skills: ['Networking', 'System Administration', 'API Integration', 'Troubleshooting'],
      description: t('skills.systemIntegrationDesc')
    },
    {
      title: 'Automation & Workflows',
      icon: <Server className="w-6 h-6" />,
      color: 'bg-indigo-500',
      skills: ['n8n', 'Process Automation', 'Workflow Design', 'Integration'],
      description: 'Automatisierung von Geschäftsprozessen und Workflow-Management'
    }
  ];

  const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="flex flex-col items-center group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
      >
        <div className="relative w-24 h-24 mb-4">
          <div className="w-full h-full rounded-full border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center">
            <div className="text-3xl group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
          </div>
          <div 
            className="absolute inset-0 rounded-full border-4 border-transparent"
            style={{ 
              borderTopColor: skill.color,
              borderRightColor: skill.color,
              borderBottomColor: skill.level === 'Fortgeschritten' ? skill.color : 'transparent',
              borderLeftColor: skill.level === 'Fortgeschritten' ? skill.color : 'transparent'
            }}
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
          {skill.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-1">
          {skill.category}
        </p>
        <span 
          className="px-3 py-1 rounded-full text-xs font-medium text-white"
          style={{ backgroundColor: skill.color }}
        >
          {skill.level}
        </span>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('skills.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('skills.competencyAreas')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`${category.color} text-white p-2 rounded-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {t('skills.myLearningApproach')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t('skills.structuredLearning')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('skills.structuredLearningDesc')}
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t('skills.practicalApplication')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('skills.practicalApplicationDesc')}
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t('skills.continuousImprovement')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('skills.continuousImprovementDesc')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;