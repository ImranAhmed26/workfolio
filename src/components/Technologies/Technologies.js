import React from 'react';
import { SiAmazonaws, SiAngular, SiNodeDotJs } from 'react-icons/si';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Card, CardIcon, CardTitle, Pill, PillList, TechGrid } from './TechnologiesStyles';

const techStack = [
  {
    icon: <SiNodeDotJs size="3.2rem" color="#68a063" />,
    title: 'Back-End',
    items: ['Node JS', 'Go', 'Express', 'NestJS', 'Supabase'],
  },
  {
    icon: <SiAngular size="3.2rem" color="#dd0031" />,
    title: 'Front-End',
    items: ['React', 'Angular', 'Flutter', 'Swift', 'Next JS', 'TanStack Start'],
  },
  {
    icon: <SiAmazonaws size="3.2rem" color="#f59e0b" />,
    title: 'Cloud & Data',
    items: ['AWS', 'Claude Code', 'PostgreSQL', 'MongoDB', 'DigitalOcean'],
  },
];

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I build across the full stack — from performant APIs and backend services to polished,
      responsive frontends — using modern tools and cloud infrastructure to ship production-ready products.
    </SectionText>
    <TechGrid>
      {techStack.map(({ icon, title, items }) => (
        <Card key={title}>
          <CardIcon>{icon}</CardIcon>
          <CardTitle>{title}</CardTitle>
          <PillList>
            {items.map((item, i) => <Pill key={i}>{item}</Pill>)}
          </PillList>
        </Card>
      ))}
    </TechGrid>
  </Section>
);

export default Technologies;
