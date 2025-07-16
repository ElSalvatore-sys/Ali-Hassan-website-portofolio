import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github?: string;
  demo?: string;
  details: string;
  learnings: string[];
  challenges: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
      onClick={onClick}
    >
      {/* Image Container with Overlay */}
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          {project.category === 'web-dev' && '🌐'}
          {project.category === 'ai' && '🤖'}
          {project.category === 'automation' && '⚙️'}
          {project.category === 'system-integration' && '🔧'}
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex space-x-3">
            {project.github && (
              <motion.a
                href={project.github}
                onClick={(e) => e.stopPropagation()}
                className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View Code"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                onClick={(e) => e.stopPropagation()}
                className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
            <motion.button
              className="bg-blue-500/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-blue-600/80 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="View Details"
            >
              <Eye className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <motion.h3 
          className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors duration-300"
          layoutId={`title-${project.id}`}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + techIndex * 0.05 }}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
              +{project.technologies.length - 3} {t('projects.more')}
            </span>
          )}
        </div>
        
        {/* Footer */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {project.github && (
              <a
                href={project.github}
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Demo</span>
              </a>
            )}
          </div>
          <motion.button 
            className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center space-x-1 group"
            whileHover={{ x: 5 }}
          >
            <span>{t('projects.moreDetails')}</span>
            <motion.span
              className="transform transition-transform group-hover:translate-x-1"
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;