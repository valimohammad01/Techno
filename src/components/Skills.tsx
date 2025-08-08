import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Brain, Server, Coffee, Phone as Python, Code2Icon, CodeSquareIcon, CodeIcon, Code } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-8 h-8" />,
      skills: [
        { name: 'Java', level: 60, icon: <Coffee className="w-6 h-6" />, color: 'from-orange-500 to-red-500' },
        { name: 'Python', level: 75, icon: <CodeSquareIcon className="w-6 h-6" />, color: 'from-blue-500 to-green-500' },
        { name: 'SQL', level: 70, icon: <Database className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
        { name: 'Shell Scription', level: 60, icon: <CodeSquareIcon className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' },
      ],
    },
    {
      title: 'Machine Learning & AI',
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: 'TensorFlow', level: 70, icon: <Brain className="w-6 h-6" />, color: 'from-orange-500 to-red-500' },
        { name: 'PyTorch', level: 75, icon: <Brain className="w-6 h-6" />, color: 'from-red-500 to-pink-500' },
        { name: 'Scikit-learn', level: 65, icon: <Brain className="w-6 h-6" />, color: 'from-blue-500 to-purple-500' },
        { name: 'Jenkins', level: 60, icon: <Database className="w-6 h-6" />, color: 'from-teal-500 to-cyan-500' },
      ],
    },
    {
      title: 'Database & Backend',
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: 'MySQL', level: 80, icon: <Database className="w-6 h-6" />, color: 'from-blue-600 to-blue-800' },
        { name: 'MongoDB', level: 65, icon: <Database className="w-6 h-6" />, color: 'from-green-500 to-green-700' },
        { name: 'Data Analysis', level: 60, icon: <Database className="w-6 h-6" />, color: 'from-teal-500 to-cyan-500' },
        { name: 'Spring Boot', level: 40, icon: <Server className="w-6 h-6" />, color: 'from-green-600 to-green-800' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 -right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable, and robust solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full"
                whileHover={{ 
                  y: -5,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white shadow-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.6 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className={`p-1 bg-gradient-to-r ${skill.color} rounded-md text-white`}>
                            {skill.icon}
                          </div>
                          <span className="font-medium text-gray-700">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-500">{skill.level}%</span>
                      </div>
                      
                      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1, duration: 1, ease: "easeOut" }}
                        />
                      </div>

                      {/* Circular Progress Alternative */}
                      <div className="hidden lg:flex justify-center mt-3">
                        <div className="relative w-16 h-16">
                          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="2"
                            />
                            <motion.path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              strokeWidth="2"
                              strokeLinecap="round"
                              initial={{ strokeDasharray: "0 100" }}
                              animate={inView ? { strokeDasharray: `${skill.level} 100` } : {}}
                              transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1, duration: 1 }}
                              className={`stroke-current text-transparent bg-gradient-to-r ${skill.color} bg-clip-text`}
                              style={{
                                background: `linear-gradient(45deg, #3B82F6, #8B5CF6)`,
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                              }}
                              stroke="url(#gradient)"
                            />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-semibold text-gray-600">{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;