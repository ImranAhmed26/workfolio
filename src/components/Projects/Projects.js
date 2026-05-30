import React, { useEffect, useRef, useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import {
  BlogCard, CardBody, CardDescription, CardImage, CardImageWrapper,
  CardLink, CardLinks, CardTitle, CarouselTrack, CarouselViewport, Tag, TagList
} from './ProjectsStyles';

const SLIDE_MS  = 500;   // CSS transition duration
const INTERVAL  = 3000;  // auto-advance interval
const DESKTOP_N = 3;     // cards visible on desktop
const DESKTOP_G = 24;    // gap between cards (px)

// Clone the first 3 cards at the end so the loop feels infinite
const cloned = [...projects, ...projects.slice(0, DESKTOP_N)];

const Projects = () => {
  const [index,     setIndex]     = useState(0);
  const [animating, setAnimating] = useState(true);
  const [cardW,     setCardW]     = useState(0);
  const [gap,       setGap]       = useState(DESKTOP_G);
  const containerRef = useRef(null);

  // Measure step width on mount and on window resize
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const W      = containerRef.current.offsetWidth;
      const mobile = window.innerWidth <= 768;
      const g      = mobile ? 0 : DESKTOP_G;
      const n      = mobile ? 1 : DESKTOP_N;
      setGap(g);
      setCardW((W - g * (n - 1)) / n);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Auto-advance every INTERVAL ms
  useEffect(() => {
    const id = setInterval(() => {
      setAnimating(true);
      setIndex(i => i + 1);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  // When we land on the clone zone, wait for the transition then instant-jump to real index 0
  useEffect(() => {
    if (index === projects.length) {
      const tid = setTimeout(() => {
        setAnimating(false);
        setIndex(0);
      }, SLIDE_MS);
      return () => clearTimeout(tid);
    }
  }, [index]);

  // Re-enable the transition one frame after the instant jump
  useEffect(() => {
    if (!animating) {
      const tid = setTimeout(() => setAnimating(true), 50);
      return () => clearTimeout(tid);
    }
  }, [animating]);

  const translateX = index * (cardW + gap);

  return (
    <Section nopadding id="projects" style={{ padding: '64px 48px 0' }}>
      <SectionDivider />
      <SectionTitle>Projects</SectionTitle>
      <CarouselViewport ref={containerRef}>
        <CarouselTrack
          style={{
            transform:  `translateX(-${translateX}px)`,
            transition: animating
              ? `transform ${SLIDE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
              : 'none',
            gap: `${gap}px`,
          }}
        >
          {cloned.map(({ id, image, title, description, tags, source, visit, hideCode }, i) => (
            <BlogCard key={`${id}-${i}`} style={{ flex: `0 0 ${cardW}px` }}>
              <CardImageWrapper>
                <CardImage src={image} alt={title} />
              </CardImageWrapper>
              <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <TagList>
                  {tags.map((tag, j) => <Tag key={j}>{tag}</Tag>)}
                </TagList>
                <CardLinks>
                  <CardLink href={visit} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink size="1.4rem" /> Visit
                  </CardLink>
                  {!hideCode && (
                    <CardLink href={source} target="_blank" rel="noopener noreferrer" secondary>
                      <FiGithub size="1.4rem" /> Code
                    </CardLink>
                  )}
                </CardLinks>
              </CardBody>
            </BlogCard>
          ))}
        </CarouselTrack>
      </CarouselViewport>
    </Section>
  );
};

export default Projects;
