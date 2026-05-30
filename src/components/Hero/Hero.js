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
          I'm a full-stack developer based in Dhaka focused on building reliable, scalable
          web applications and backend systems. I take pride in writing clean, maintainable
          code that teams can build on — and I'm always exploring what's moving in the industry.
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
