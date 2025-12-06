import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaAward, FaCode, FaServer, FaDatabase, FaCloud, FaGraduationCap, FaBriefcase, FaChevronDown } from 'react-icons/fa';
import { SiJavascript, SiPython, SiNodedotjs, SiReact, SiDocker, SiKubernetes, SiGit } from 'react-icons/si';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
   
    { name: 'Python', icon: <SiPython className="text-2xl" />, color: 'bg-blue-500' },
    { name: 'JavaScript', icon: <SiJavascript className="text-2xl" />, color: 'bg-yellow-500' },
    { name: 'Node.js', icon: <SiNodedotjs className="text-2xl" />, color: 'bg-green-600' },
    { name: 'React', icon: <SiReact className="text-2xl" />, color: 'bg-cyan-500' },
   
    { name: 'Docker', icon: <SiDocker className="text-2xl" />, color: 'bg-blue-600' },
    { name: 'Kubernetes', icon: <SiKubernetes className="text-2xl" />, color: 'bg-blue-700' },
    { name: 'Git', icon: <SiGit className="text-2xl" />, color: 'bg-orange-600' },
  ];

  const experiences = [
    {
      title: 'Integration Developer',
      company: 'Workcover Queensland, Australia',
      period: 'Aug 2023 - Present',
      description: 'Working with Kubernetes, Docker, and AWS, focusing on cloud migration from legacy systems to AWS',
      highlights: ['Cloud Migration', 'Database Optimization', 'Microservices']
    },
    {
      title: 'Integration Developer',
      company: 'Auto & General, Australia',
      period: 'Sep 2022 - Jul 2023',
      description: 'Upgrading applications to enhance security and implementing event-driven architectures',
      highlights: ['Security Enhancement', 'Event-Driven Architecture']
    },
    {
      title: 'Senior Analyst Programmer',
      company: 'Fidelity International, India',
      period: 'Oct 2017 - Sep 2022',
      description: 'Developed projects for Wealth Management and provided technical leadership',
      highlights: ['Wealth Management', 'Technical Leadership', 'Mentorship']
    }
  ];

  const achievements = [
    { title: 'Making IT Real Award', year: '2021-2022', org: 'Fidelity International' },
    { title: 'Bi-Annual Award', year: '2020-2021', org: 'Fidelity International' },
    { title: 'On The Spot Award', year: '2018-2021', org: 'Fidelity International' },
    { title: '1st Runner Up', year: '2015-2016', org: 'Nasscom WSC' },
    { title: 'Global Finalist', year: '2014-2015', org: 'Microsoft Apps Challenge' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              NV
            </motion.div>
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Skills', 'Experience', 'Achievements'].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl w-full"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1 
                className="text-6xl md:text-7xl font-bold"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Neha Valecha
                </span>
              </motion.h1>
              <motion.p 
                className="text-2xl text-gray-600 font-light"
                variants={itemVariants}
              >
                Software Developer & Cloud Architect
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                8 years of experience building robust, scalable web applications with expertise in cloud migration and microservices architecture.
              </motion.p>
              <motion.div 
                className="flex gap-4 flex-wrap"
                variants={itemVariants}
              >
                <a href="mailto:nehavalecha456@gmail.com">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2"
                  >
                    <FaEnvelope /> Get In Touch
                  </motion.button>
                </a>
                <a href="https://linkedin.com/in/neha-valecha" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium flex items-center gap-2"
                  >
                    <FaLinkedin /> LinkedIn
                  </motion.button>
                </a>
              </motion.div>
              <motion.div 
                className="flex gap-6 text-gray-600"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  <FaPhone className="text-purple-600" />
                  <span>+61 426 778 465</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-purple-600" />
                  <span>Coorparoo, QLD</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-gradient-to-br from-purple-500 to-pink-500 p-1 rounded-full"
              >
                <div className="bg-white p-2 rounded-full">
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center overflow-hidden">
                    <FaCode className="text-9xl text-purple-600 opacity-20" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex justify-center mt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaChevronDown className="text-4xl text-purple-600 opacity-50" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Bento Grid */}
      <section id="about" className="py-20 px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            What I Do
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="md:col-span-2 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <FaCloud className="text-5xl text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Cloud Architecture & Migration</h3>
              <p className="text-gray-600 leading-relaxed">
                Specializing in AWS cloud migrations, transforming legacy systems into modern, scalable cloud-native applications. Expert in Kubernetes orchestration and Docker containerization for optimal performance.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 shadow-xl text-white"
            >
              <FaServer className="text-5xl mb-4" />
              <h3 className="text-2xl font-bold mb-3">Microservices</h3>
              <p className="leading-relaxed">
                Building distributed systems with event-driven architecture and microservices patterns for maximum scalability.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-3xl p-8 shadow-xl text-white"
            >
              <FaDatabase className="text-5xl mb-4" />
              <h3 className="text-2xl font-bold mb-3">Database Optimization</h3>
              <p className="leading-relaxed">
                Creating and executing database patch scripts ensuring data integrity and optimal performance across environments.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="md:col-span-2 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <FaCode className="text-5xl text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Full-Stack Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Proficient in building end-to-end solutions using Java, Python, JavaScript, and modern frameworks. Strong foundation in both frontend and backend technologies with focus on clean, maintainable code.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <motion.div 
                  className={`${skill.color} p-4 rounded-xl text-white`}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, delay: index * 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <span className="font-semibold text-gray-700">{skill.name}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-900">Additional Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Spring Boot', 'Maven', 'Hibernate', 'DBMS', 'Junit', 'CI/CD Pipeline'].map(skill => (
                  <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-900">Cloud & DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Kubernetes', 'Docker', 'Microservices', 'Git'].map(skill => (
                  <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-900">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {['Cloud Migration', 'Event-Driven', 'RESTful APIs'].map(skill => (
                  <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Experience
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-purple-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 bg-purple-100 px-4 py-2 rounded-full mt-2 md:mt-0 inline-block">
                    <FaBriefcase className="inline mr-2" />
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, i) => (
                    <span key={i} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaGraduationCap className="text-5xl" />
              <div>
                <h3 className="text-2xl font-bold">Education</h3>
                <p className="text-purple-100">Manav Rachna College of Engineering</p>
              </div>
            </div>
            <p className="text-lg">Bachelor of Technology / Computer Science</p>
            <p className="text-purple-100">August 2012 - May 2016 | 8.10 CGPA (Scale of 10)</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Achievements & Recognition
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors"
              >
                <FaAward className="text-4xl text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-purple-600 font-semibold mb-1">{achievement.org}</p>
                <p className="text-gray-500 text-sm">{achievement.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-12 px-6 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:nehavalecha456@gmail.com"
                className="bg-white text-purple-900 p-4 rounded-full hover:bg-purple-100 transition-colors"
              >
                <FaEnvelope className="text-2xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://linkedin.com/in/neha-valecha"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-900 p-4 rounded-full hover:bg-purple-100 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="tel:+61426778465"
                className="bg-white text-purple-900 p-4 rounded-full hover:bg-purple-100 transition-colors"
              >
                <FaPhone className="text-2xl" />
              </motion.a>
            </div>
            <p className="text-purple-200 text-sm">
              © 2024 Neha Valecha. Crafted with passion and code.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}