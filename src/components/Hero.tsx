import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Coffee, Code, Database } from 'lucide-react';
import profilePic from "D:/Portfolio/src/assets/Profile.jpg";


interface HeroProps {
  mousePosition: { x: number; y: number };
}

const Hero: React.FC<HeroProps> = ({ mousePosition }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const skills = ['Java Developer', 'Python Expert', 'ML Engineer', 'Database Architect'];

  useEffect(() => {
    const skill = skills[currentIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(skill.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }
      } else {
        setDisplayText(skill.substring(0, displayText.length + 1));
        if (displayText === skill) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, skills]);

  const parallaxOffset = {
    x: (mousePosition.x - window.innerWidth / 2) * 0.02,
    y: (mousePosition.y - window.innerHeight / 2) * 0.02,
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-blue-500/20"
        animate={{
          x: parallaxOffset.x,
          y: parallaxOffset.y,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        <Coffee size={48} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4 text-purple-500/20"
        animate={{
          x: -parallaxOffset.x,
          y: parallaxOffset.y,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        <Code size={56} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-1/3 text-orange-500/20"
        animate={{
          x: parallaxOffset.x * 1.5,
          y: -parallaxOffset.y,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        <Database size={44} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                Vali Mohammad
              </span>
            </motion.h1>

            <motion.div 
              className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-4 h-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Turning ideas into intelligent solutions with expertise in{' '}
              <span className="font-semibold text-blue-600">Java</span>,{' '}
              <span className="font-semibold text-purple-600">Python</span>,{' '}
              <span className="font-semibold text-orange-600">Machine Learning</span>, and{' '}
              <span className="font-semibold text-teal-600">Database Systems</span>.
            </motion.p>

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="https://drive.google.com/file/d/1HbX0may12FOaJsqvw2OoA_0yarkvDHDL/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download Resume</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative w-80 h-80 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-orange-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-blue-600 via-purple-600 to-orange-600 rounded-full p-1">
                <div className="w-full h-full bg-white rounded-full p-4 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                    <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
