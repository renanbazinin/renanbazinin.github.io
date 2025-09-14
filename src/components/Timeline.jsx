import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase, GraduationCap, Heart, Star, Users } from 'lucide-react';

const Timeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const timelineEvents = [
    {
      year: '1998',
      title: 'Born in Israel',
      subtitle: 'The Beginning',
      icon: <Heart size={20} />,
      description: 'Born in Israel',
      color: 'var(--primary-color)'
    },
    {
      year: '2014 – 2017',
      title: 'High School Excellence',
      subtitle: 'High School Katzir - Nachshon Leadership Class',
      icon: <GraduationCap size={20} />,
      description: 'I learned in Nachshon Class, leadership class.',
      details: [
        '5 points Math',
        '10 points Computers',
        '5 points Computational Science',
        '5 points Physics',
        'Hackathons participation',
        'Mentoring robotic team',
        'Instructor in science summer camp for middle school'
      ],
      color: 'var(--secondary-color)'
    },
    {
      year: '2017 – 2020',
      title: 'Military Service',
      subtitle: 'Medic and Head of clinic',
      icon: <Briefcase size={20} />,
      description: 'Served as a medic and head of clinic, developing innovative solutions.',
      details: [
        'Excellence of Medical Services Center (Prize Of Colonel)',
        'Made program for ideal human resource extraction (Made in VBA)',
        'Made program for writing medical records (Personal project)'
      ],
      color: 'var(--accent-color)'
    },
    {
      year: '2020 – 2022',
      title: 'Post-Military Growth',
      subtitle: 'Reserve duty and professional development',
      icon: <Star size={20} />,
      description: 'Continued learning and contributing to the community.',
      details: [
        'Learned React and advanced JavaScript at KERNELiOS',
        'Called to reserve service for vaccination duty',
        'Performed blood tests and coronavirus testing',
        'Mentored a FLL team, robotic competition for middle school'
      ],
      color: 'var(--primary-color)'
    },
    {
      year: '2022 – Present',
      title: 'Computer Science Studies',
      subtitle: 'MTA (Academic Tel Aviv Yafo)',
      icon: <Users size={20} />,
      description: 'Currently pursuing my degree in Computer Science.',
      details: [
        'Third year at MTA',
        'Focusing on algorithms and data structures',
        'Exploring web development and data science',
        'Building innovative projects'
      ],
      color: 'var(--secondary-color)'
    },
    {
      year: '2025',
      title: '🏆 2x Award-WinnerConference',
      subtitle: 'FocusFlow Project Achievements',
      icon: <Award size={20} />,
      description: 'Presented our award-winning project, FocusFlow, at the AI-ED 2025 conference in Italy. This project, which transforms video lectures into interactive learning experiences, won first place at both the ACM SYSTOR 2025 conference and the annual projects conference at The Academic College of Tel Aviv-Yaffo.',
      details: [
        "1st Place - ACM SYSTOR 2025 Conference",
        "1st Place - Annual Projects Conference, The Academic College of Tel Aviv-Yaffo",
        "Presented at AI-ED 2025 Conference, Italy",
        "Co-authored with Alona Gatker and Jonatan Shaya",
        "Supervised by Dr. Sarel Cohen"
      ],
      color: 'var(--accent-color)'
    }
  ];

  return (
    <div className="section" style={{ paddingTop: '6rem', background: 'var(--surface)' }}>
      <div className="container">
        {/* Header */}
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title gradient-text">My Journey</h1>
          <p className="section-subtitle">
            A timeline of experiences, growth, and achievements that shaped who I am today.
          </p>
        </motion.div>        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Timeline Line */}
          <div style={{
            position: 'absolute',
            left: isMobile ? '30px' : '50%',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'linear-gradient(180deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
            transform: isMobile ? 'none' : 'translateX(-50%)',
            borderRadius: '2px'
          }} />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              style={{
                position: 'relative',
                marginBottom: '3rem',
                display: 'flex',
                alignItems: isMobile ? 'flex-start' : 'center',
                flexDirection: isMobile ? 'row' : (index % 2 === 0 ? 'row' : 'row-reverse'),
                paddingLeft: isMobile ? '70px' : '0'
              }}
              initial={{ opacity: 0, x: isMobile ? -30 : (index % 2 === 0 ? -50 : 50) }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >              {/* Content Card */}
              <div style={{
                flex: 1,
                maxWidth: isMobile ? 'none' : '450px',
                margin: isMobile ? '0' : (index % 2 === 0 ? '0 2rem 0 0' : '0 0 0 2rem'),
                width: isMobile ? '100%' : 'auto'
              }}>                <motion.div
                  style={{
                    background: 'var(--surface-elevated)',
                    padding: isMobile ? '1.5rem' : '2rem',
                    borderRadius: '1rem',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid var(--border)',
                    position: 'relative'
                  }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: 'var(--shadow-xl)',
                    transition: { duration: 0.3 }
                  }}
                >                  {/* Arrow - Hidden on mobile */}
                  {!isMobile && (
                    <div style={{
                      position: 'absolute',
                      top: '2rem',
                      [index % 2 === 0 ? 'right' : 'left']: '-10px',
                      width: 0,
                      height: 0,
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      [index % 2 === 0 ? 'borderLeft' : 'borderRight']: '10px solid var(--surface-elevated)'
                    }} />
                  )}

                  {/* Year Badge */}
                  <div style={{
                    background: event.color,
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '2rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    marginBottom: '1rem'
                  }}>
                    <Calendar size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                    {event.year}
                  </div>

                  <h3 style={{ 
                    color: 'var(--text-primary)', 
                    marginBottom: '0.5rem',
                    fontSize: '1.5rem'
                  }}>
                    {event.title}
                  </h3>
                  
                  <p style={{ 
                    color: event.color, 
                    fontWeight: '600',
                    marginBottom: '1rem',
                    fontSize: '1rem'
                  }}>
                    {event.subtitle}
                  </p>
                  
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    marginBottom: event.details ? '1.5rem' : 0,
                    lineHeight: '1.6'
                  }}>
                    {event.description}
                  </p>

                  {event.details && (
                    <div>
                      <h4 style={{ 
                        color: 'var(--text-primary)', 
                        marginBottom: '1rem',
                        fontSize: '1.1rem'
                      }}>
                        Key Highlights:
                      </h4>
                      <ul style={{ 
                        listStyle: 'none', 
                        padding: 0,
                        marginLeft: '0'
                      }}>
                        {event.details.map((detail, detailIndex) => (
                          <motion.li 
                            key={detailIndex}
                            style={{
                              marginBottom: '0.75rem',
                              paddingLeft: '1.5rem',
                              position: 'relative',
                              color: 'var(--text-secondary)',
                              lineHeight: '1.5'
                            }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: (index * 0.2) + (detailIndex * 0.1) + 0.5 }}
                          >
                            <div style={{
                              position: 'absolute',
                              left: 0,
                              top: '0.6rem',
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: event.color
                            }} />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </div>              {/* Center Icon */}
              <div style={{
                position: 'absolute',
                left: isMobile ? '30px' : '50%',
                transform: isMobile ? 'translateX(-50%)' : 'translateX(-50%)',
                top: isMobile ? '1rem' : 'auto',
                width: isMobile ? '50px' : '60px',
                height: isMobile ? '50px' : '60px',
                borderRadius: '50%',
                background: 'var(--surface-elevated)',
                border: `4px solid ${event.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: event.color,
                boxShadow: 'var(--shadow-md)',
                zIndex: 10
              }}>
                {React.cloneElement(event.icon, { size: isMobile ? 16 : 20 })}
              </div>
            </motion.div>
          ))}
        </div>        {/* Bottom CTA */}
        <motion.div
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: isMobile ? '2rem 1rem' : '3rem',
            background: 'var(--surface-elevated)',
            borderRadius: '1rem',
            border: '1px solid var(--border)'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: timelineEvents.length * 0.2 + 0.5 }}
        >
          <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
            What's Next?
          </h3>
          <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            The journey continues as I explore new technologies, take on challenging projects, 
            and contribute to meaningful solutions in the tech world.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#/projects" className="btn btn-primary">
              <Award size={20} style={{ marginRight: '0.5rem' }} />
              View My Projects
            </a>
            <a href="#/about" className="btn btn-secondary">
              <MapPin size={20} style={{ marginRight: '0.5rem' }} />
              Learn More About Me
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
