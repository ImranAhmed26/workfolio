import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import {
  BlogCard, CardBody, CardDescription, CardImage, CardImageWrapper,
  CardLink, CardLinks, CardTitle, GridContainer, Tag, TagList
} from './ProjectsStyles';

const Projects = () => (
  <Section nopadding id="projects" style={{ padding: '64px 48px 0' }}>
    <SectionDivider />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit, hideCode }) => (
        <BlogCard key={id}>
          <CardImageWrapper>
            <CardImage src={image} alt={title} />
          </CardImageWrapper>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <TagList>
              {tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
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
    </GridContainer>
  </Section>
);

export default Projects;
