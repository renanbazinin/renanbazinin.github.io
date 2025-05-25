import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Code, Globe, Star, BookOpen } from 'lucide-react';

const AboutMe = () => {
  const skills = {
    'High-level Programming Languages': [
      'Java',
      'C++',
      'Python (100 score in 5 Point software engineering project)'
    ],
    'Web Development': [
      'Advanced JavaScript (Async programming and callback functions)',
      'Node.js, React, MongoDB, and Express'
    ],
    'General': [
      'Excel (including VBA)',
      'Hebrew - Native language',
      'English - Very good. Scored 142/150 in the psychometry exam'
    ]
  };

  const achievements = [
    {
      icon: <BookOpen size={24} />,
      title: 'Computational Science Program',
      description: 'Studied at Davidson Institute with 15 points in software engineering (Bagrut)'
    },
    {
      icon: <Award size={24} />,
      title: 'Hackathon Success',
      description: 'Participated in many hackathons during high school, won second prize in one'
    },
    {
      icon: <Code size={24} />,
      title: 'Author Discovery Project',
      description: 'Created a system to discover anonymous book authors using data analysis'
    },
    {
      icon: <Star size={24} />,
      title: 'Academic Achievement',
      description: 'Second year at MTA (Academic Tel Aviv Yafo) in Computer Science'
    }
  ];

  return (
    <div className="section" style={{ paddingTop: '6rem' }}>
      <div className="container">
        {/* Header */}
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title gradient-text">Renan Bazinin</h1>
          <p className="section-subtitle" style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
            I'm a student of computer science. I have always had a passion for computers.
          </p>
        </motion.div>        {/* Main Content Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem', 
          marginBottom: '4rem' 
        }}>          {/* About Me Section */}
          <motion.div
            style={{
              background: 'var(--surface-elevated)',
              padding: '1.5rem',
              borderRadius: '1rem',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border)'
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <User size={28} style={{ color: 'var(--primary-color)', marginRight: '0.75rem' }} />
              <h3 style={{ color: 'var(--text-primary)', marginBottom: 0 }}>Points about me</h3>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid var(--primary-color)', color: 'var(--text-secondary)' }}>
                I studied at a program called computational science in Davidson institute and also software engineering (15 points in the Bagrut).
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid var(--primary-color)', color: 'var(--text-secondary)' }}>
                In high school I participated in many Hackathons - second prize in one of them.
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid var(--primary-color)', color: 'var(--text-secondary)' }}>
                I am still open to everything in this field. I like Web-Development, Algorithmics and hope to gain enough mathematical theory to explore the data science world.
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid var(--primary-color)', color: 'var(--text-secondary)' }}>
                My project in software engineering was - "Discover the author of an anonymous book by data of many other books and authors", inspired by this{' '}
                <a 
                  href='https://languagelog.ldc.upenn.edu/nll/?p=5315' 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--primary-color)', fontWeight: '500' }}
                >
                  Article
                </a>.
              </li>
              <li style={{ paddingLeft: '1rem', borderLeft: '3px solid var(--primary-color)', color: 'var(--text-secondary)' }}>
                Second year at MTA (Academic Tel Aviv Yafo).
              </li>
            </ul>
          </motion.div>          {/* Skills Section */}
          <motion.div
            style={{
              background: 'var(--surface-elevated)',
              padding: '1.5rem',
              borderRadius: '1rem',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border)'
            }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Code size={28} style={{ color: 'var(--secondary-color)', marginRight: '0.75rem' }} />
              <h3 style={{ color: 'var(--text-primary)', marginBottom: 0 }}>Skills</h3>
            </div>
            
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ 
                  color: 'var(--primary-color)', 
                  marginBottom: '0.75rem',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {category}:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, marginLeft: '1rem' }}>
                  {skillList.map((skill, skillIndex) => (
                    <motion.li 
                      key={skillIndex}
                      style={{ 
                        marginBottom: '0.5rem',
                        color: 'var(--text-secondary)',
                        position: 'relative',
                        paddingLeft: '1rem'
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) + (skillIndex * 0.05) }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'var(--secondary-color)'
                      }}></span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: 'var(--text-primary)' }}>
            Key Achievements
          </h3>
            <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                style={{
                  background: 'var(--surface-elevated)',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--border)',
                  textAlign: 'center'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: 'var(--shadow-lg)',
                  transition: { duration: 0.3 }
                }}
              >
                <div style={{ 
                  color: 'var(--primary-color)', 
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {achievement.icon}
                </div>
                <h4 style={{ 
                  marginBottom: '0.75rem',
                  color: 'var(--text-primary)',
                  fontSize: '1.1rem'
                }}>
                  {achievement.title}
                </h4>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  marginBottom: 0
                }}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>        {/* Call to Action */}
        <motion.div
          style={{ 
            textAlign: 'center', 
            marginTop: '4rem',
            padding: '2rem 1rem',
            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
            borderRadius: '1rem',
            color: 'white'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 style={{ marginBottom: '1rem', color: 'white' }}>Interested in collaborating?</h3>
          <p style={{ marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.9)' }}>
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <a 
            href="mailto:renanbazinin@gmail.com" 
            className="btn"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            <Globe size={20} style={{ marginRight: '0.5rem' }} />
            Let's Connect
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
