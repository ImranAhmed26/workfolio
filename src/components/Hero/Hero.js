import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello!   <br/>
        I'm Imran Ahmed
      </SectionTitle>
      <SectionText>
      Full-stack developer from Dhaka focused on building production-ready web applications, backend systems, and API-driven products using React, Angular, Node Js, TypeScript, MongoDB,  PostgreSQL, AWS services, Claude code and more.
      </SectionText>
      <Button onClick = {() => window.open('https://drive.google.com/file/d/1kbwG9HQ5Y8uWyvaJGoeB1ItZSD0JGzkd/view?usp=sharing', '_blank', 'noopener,noreferrer')} > Resume </Button>
       </LeftSection>
    
 </Section>
);

export default Hero;
