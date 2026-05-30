import React from 'react';

import { SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import HeroAnimation from './HeroAnimation';
import { HeroBadge, HeroGrid, HeroLeft, HeroRight, HeroSection, HeroSubtitle } from './HeroStyles';

const Hero = () => (
  <HeroSection>
    <HeroGrid>
      <HeroLeft>
        <HeroBadge>Available for opportunities</HeroBadge>
        <SectionTitle main>
          Hello! I'm<br />Imran Ahmed
        </SectionTitle>
        <HeroSubtitle>
          Full-stack developer from Dhaka building production-ready web apps, backend systems,
          and API-driven products using React, Angular, Node.js, TypeScript, and AWS.
        </HeroSubtitle>
        <Button onClick={() => window.open('https://drive.google.com/file/d/1kbwG9HQ5Y8uWyvaJGoeB1ItZSD0JGzkd/view?usp=sharing', '_blank', 'noopener,noreferrer')}>
          Resume
        </Button>
      </HeroLeft>
      <HeroRight>
        <HeroAnimation />
      </HeroRight>
    </HeroGrid>
  </HeroSection>
);

export default Hero;
