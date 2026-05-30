import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { experiences } from '../../constants/constants';
import {
  CardCompany, CardDesc, CardPeriod, CardRole, CardTop,
  CurrentBadge, ExpCard, ExpDot, TimelineItem, TimelineWrapper
} from './ExperienceStyles';

const Experience = () => (
  <Section id="experience">
    <SectionDivider />
    <SectionTitle>Experience</SectionTitle>
    <TimelineWrapper>
      {[...experiences].reverse().map((exp, i) => (
        <TimelineItem key={i}>
          <ExpDot current={exp.current} />
          <ExpCard current={exp.current}>
            <CardTop>
              <CardPeriod>{exp.period}</CardPeriod>
              {exp.current && <CurrentBadge>Current</CurrentBadge>}
            </CardTop>
            <CardCompany current={exp.current}>{exp.company}</CardCompany>
            <CardRole>{exp.role}</CardRole>
            <CardDesc>{exp.description}</CardDesc>
          </ExpCard>
        </TimelineItem>
      ))}
    </TimelineWrapper>
  </Section>
);

export default Experience;
