import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CLITerminal: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState([
    t('cli.welcome'),
    t('cli.helpPrompt'),
    ''
  ]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '~' && !isOpen) {
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  const handleCommand = (cmd: string) => {
    const newOutput = [...output, `$ ${cmd}`];
    
    switch (cmd.toLowerCase()) {
      case 'help':
        newOutput.push(
          t('cli.availableCommands'),
          '  help        - ' + t('cli.help'),
          '  about       - ' + t('cli.aboutAli'),
          '  ausbildung  - ' + t('cli.trainingGoals'),
          '  skills      - ' + t('cli.listSkills'),
          '  projects    - ' + t('cli.showProjects'),
          '  contact     - ' + t('cli.contactInfo'),
          '  motivation  - ' + t('cli.motivationForTraining'),
          '  clear       - ' + t('cli.clearTerminal'),
          '  exit        - ' + t('cli.closeTerminal')
        );
        break;
      case 'about':
        newOutput.push(
          'Ali Hassan - Angehender Fachinformatiker für Systemintegration',
          'Standort: Wiesbaden, Deutschland (65195)',
          'Status: Bereit für Ausbildungsbeginn',
          'Fokus: Systemintegration, Netzwerktechnik, Automatisierung',
          'Sprachen: Arabisch (Muttersprache), Englisch (C1), Deutsch (B2)'
        );
        break;
      case 'ausbildung':
        newOutput.push(
          'Ausbildungsziel: Fachinformatiker für Systemintegration',
          'Verfügbarkeit: Sofort verfügbar',
          'Mobilität: Deutschlandweit',
          'Dauer: 3 Jahre (verkürzt auf 2,5 Jahre möglich)',
          'Stärken: Selbstständiges Lernen, praktische Erfahrung',
          'Motivation: Strukturierte Vertiefung vorhandener Kenntnisse'
        );
        break;
      case 'skills':
        newOutput.push(
          'Technische Fähigkeiten:',
          '  HTML/CSS: Fortgeschritten - Moderne Webentwicklung',
          '  JavaScript: Fortgeschritten - Frontend & Backend',
          '  Python: Fortgeschritten - Automatisierung & AI',
          '  React: Fortgeschritten - Frontend Framework',
          '  Node.js: Fortgeschritten - Backend Development',
          '  Docker: Fortgeschritten - Containerisierung',
          '  SQL/NoSQL: Fortgeschritten - Datenbankmanagement',
          '  LLMs/AI: Fortgeschritten - KI-Integration',
          '  n8n: Fortgeschritten - Workflow-Automatisierung',
          '  Networking: Grundlagen - Netzwerkgrundlagen'
        );
        break;
      case 'projects':
        newOutput.push(
          'Ausgewählte Projekte:',
          '  1. Glenn Miller Klavierschule - Musikschul-Website',
          '  2. EA Solutions - Unternehmenswebsite für AI & IT',
          '  3. Falchi Dental Tech - Dentallabor-Automatisierung',
          '  4. Hotel am Kochbrunnen - Digitale Transformation',
          '  5. EA Local AI Assistant - KI-System mit Docker',
          '  6. AI Website Generator - KI-gestützte Entwicklung',
          '  7. Unit Converter - IBM Capstone Projekt'
        );
        break;
      case 'contact':
        newOutput.push(
          'Kontaktinformationen:',
          '  E-Mail: ali.m.g.hassan01@gmail.com',
          '  Telefon: +49 176 63062016',
          '  Standort: Wiesbaden, Deutschland',
          '  LinkedIn: linkedin.com/in/ali-hassan',
          '  GitHub: github.com/ali-hassan',
          '  Portfolio: Diese Website',
          '  Verfügbarkeit: Sofort für Gespräche'
        );
        break;
      case 'motivation':
        newOutput.push(
          'Motivation für Ausbildung:',
          '  ✓ Strukturierte Vertiefung vorhandener Kenntnisse',
          '  ✓ Praktische Erfahrung in Unternehmen sammeln',
          '  ✓ Offizielle Qualifikation als Fachinformatiker',
          '  ✓ Langfristige Karriere in der IT aufbauen',
          '  ✓ Kontinuierliches Lernen und Weiterentwicklung',
          '',
          '"Ich bringe Leidenschaft und Grundkenntnisse mit -',
          ' die Ausbildung soll mir den professionellen Rahmen geben."'
        );
        break;
      case 'clear':
        setOutput([t('cli.terminalCleared'), '']);
        setCommand('');
        return;
      case 'exit':
        setIsOpen(false);
        return;
      default:
        newOutput.push(`${t('cli.commandNotFound')}: ${cmd}`);
        newOutput.push(t('cli.helpForCommands'));
    }

    newOutput.push('');
    setOutput(newOutput);
    setCommand('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        >
          <div className="w-full max-w-4xl h-96 bg-gray-900 rounded-lg shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-green-500" />
                <span className="text-white font-mono">ali@ausbildung-portfolio:~$</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 h-64 overflow-y-auto">
              <div className="cli-terminal">
                {output.map((line, index) => (
                  <div key={index} className="whitespace-pre-wrap">
                    {line}
                  </div>
                ))}
                <div className="flex items-center">
                  <span className="text-green-500">$ </span>
                  <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleCommand(command);
                      }
                    }}
                    className="flex-1 bg-transparent text-green-500 outline-none ml-2"
                    placeholder="Befehl eingeben..."
                    autoFocus
                  />
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                {t('cli.tipMessage')}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CLITerminal;