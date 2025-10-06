import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import ProfileCard from './ProfileCard';

const ProjectSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const projects = [
    {
      type: 'PROJECT 01',
      title: 'E-Commerce',
      subtitle: '쇼핑몰 플랫폼',
      date: '2024.12',
    },
    {
      type: 'PROJECT 02',
      title: 'Dashboard',
      subtitle: '관리자 대시보드',
      date: '2024.10',
    },
    {
      type: 'PROJECT 03',
      title: 'Portfolio',
      subtitle: '개인 포트폴리오',
      date: '2024.08',
    },
    {
      type: 'PROJECT 04',
      title: 'Mobile App',
      subtitle: '모바일 애플리케이션',
      date: '2024.06',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('project-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight && sectionTop > -rect.height) {
        const progress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - sectionTop) / (windowHeight + rect.height)
          )
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCardStyle = (index) => {
    const cardProgress = scrollProgress * 1.5 - index * 0.3;

    const angle = cardProgress * 180;

    const radius = 400;

    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius * 0.6; // 타원형으로

    const scale = 0.6 + cardProgress * 0.4;

    const opacity = cardProgress > 0 && cardProgress < 1 ? 1 : 0;

    const zIndex = Math.floor(cardProgress * 100);

    return {
      transform: `translate(${x}px, ${y}px) scale(${Math.max(0, scale)})`,
      opacity: Math.max(0, Math.min(1, opacity)),
      zIndex: zIndex,
      transition: 'all 0.3s ease-out',
    };
  };

  return (
    <div id="project-section" css={projectSectionContainer}>
      <img src="/images/moon.png" alt="moon" css={moonImage} />

      <div css={orbitContainer}>
        {projects.map((project, index) => (
          <div key={index} css={cardWrapper} style={getCardStyle(index)}>
            <ProfileCard
              type={project.type}
              title={project.title}
              subtitle={project.subtitle}
              date={project.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const projectSectionContainer = css`
  width: 100%;
  height: 200vh;
  position: relative;
  background: #000;
`;

const moonImage = css`
  width: 1000px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
  z-index: 0;
  pointer-events: none;
`;

const orbitContainer = css`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  pointer-events: none;
`;

const cardWrapper = css`
  position: absolute;
  pointer-events: auto;
`;

export default ProjectSection;
