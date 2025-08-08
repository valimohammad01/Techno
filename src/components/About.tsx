import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const milestones = [
    {
      year: 'sept, 2023',
      title: 'Started Programming Journey',
      description: 'Began with Java fundamentals and object-oriented programming',
      icon: <Award className="w-5 h-5" />,
    },
    {
      year: 'May 2024',
      title: 'Python & Data Science',
      description: 'Mastered Python and explored data analysis with pandas and NumPy',
      icon: <Target className="w-5 h-5" />,
    },
    {
      year: 'November 2024',
       title: 'Database Expertise',
      description: 'Specialized in database design and optimization',
      icon: <Target className="w-5 h-5" />,
    },
      
    {
      year: 'January, 2025',
     title: 'Machine Learning',
      description: 'Dived deep into ML algorithms and neural networks',
      icon: <Award className="w-5 h-5" />,
    },
    {
      year: 'May, 2025',
      title: 'Java',
      description: 'Integrated all skills for end-to-end solution',
      icon: <Award className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I’m Vali Mohammad, a passionate developer specializing in Java, Python, machine learning, and database systems. 
                I love building scalable, impactful solutions and exploring the world of AI-driven innovation. 
                With a strong foundation in computer science and a problem-solver’s mindset, I turn complex challenges into clean, efficient, and elegant results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                y expertise spans full-stack development, deploying machine learning models, and optimizing databases for performance and scalability. 
                I’m a firm believer in continuous learning, always staying curious and up to date with the latest technologies to craft innovative, cutting-edge solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Remote / Global</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Available Now</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center lg:text-left">
                Learning Timeline
              </h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="relative flex items-start space-x-6 pb-8 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      {milestone.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold">
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;