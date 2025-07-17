import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingChat from './FloatingChat';
import FloatingContact from './FloatingContact';
import ScrollProgress from './ScrollProgress';
import CLITerminal from './CLITerminal';
import SEO from './SEO';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEO />
      <ScrollProgress />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="pt-20">
        {children}
      </main>
      <Footer />
      <FloatingChat />
      <FloatingContact />
      <CLITerminal />
    </div>
  );
};

export default Layout;