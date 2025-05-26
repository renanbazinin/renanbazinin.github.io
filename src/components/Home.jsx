import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Github, Linkedin, Mail, Code, Brain, Rocket } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        {/* Floating Elements */}
        <div className="floating-element">
          <Code size={80} />
        </div>
        <div className="floating-element">
          <Brain size={60} />
        </div>
        <div className="floating-element">
          <Rocket size={70} />
        </div>
        <div className="floating-element">
          <Code size={50} />
        </div>

        <div className="hero-content">
          <motion.h1 
            className="hero-title gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Renan Bazinin
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Computer Science Student & Full-Stack Developer
          </motion.p>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I have always had a passion for computers and creating solutions that make a difference. 
            From military medical applications to modern web development, I bring creativity and precision to every project.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/about" className="btn btn-secondary">
              About Me
            </Link>
          </motion.div>
        </div>        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            cursor: 'pointer'
          }}
          onClick={() => {
            const nextSection = document.querySelector('.section');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <ChevronDown size={32} className="animate-bounce" />
        </motion.div>
      </section>

      {/* Skills Preview Section */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <motion.h2 
            className="section-title gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What I Do
          </motion.h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <motion.div 
              className="skill-card"
              style={{
                background: 'var(--surface-elevated)',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: 'var(--shadow-lg)',
                textAlign: 'center',
                border: '1px solid var(--border)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Code size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
              <h3>Full-Stack Development</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                React, Node.js, MongoDB, Express - Building modern web applications with cutting-edge technologies.
              </p>
            </motion.div>

            <motion.div 
              className="skill-card"
              style={{
                background: 'var(--surface-elevated)',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: 'var(--shadow-lg)',
                textAlign: 'center',
                border: '1px solid var(--border)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Brain size={48} style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }} />
              <h3>Algorithms & Data Science</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Java, C++, Python - Strong foundation in computer science fundamentals and problem-solving.
              </p>
            </motion.div>

            <motion.div 
              className="skill-card"
              style={{
                background: 'var(--surface-elevated)',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: 'var(--shadow-lg)',
                textAlign: 'center',
                border: '1px solid var(--border)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Rocket size={48} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
              <h3>Innovation & Leadership</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Military experience, hackathons, mentoring - Combining technical skills with leadership and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Build Something Amazing Together
          </motion.h2>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to bring your ideas to life? Let's connect and create something extraordinary.
          </motion.p>
          
          <motion.div 
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href="mailto:renanbazinin@gmail.com" className="btn btn-primary">
              <Mail size={20} style={{ marginRight: '0.5rem' }} />
              Get In Touch
            </a>
            <a href="https://github.com/renanbazinin" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Github size={20} style={{ marginRight: '0.5rem' }} />
              GitHub
            </a>
            <a href="https:/linkedin.com/in/renan-bazinin-404590108" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Linkedin size={20} style={{ marginRight: '0.5rem' }} />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
