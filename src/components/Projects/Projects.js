import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
<Section nopadding id="projects">
  <SectionDivider/>
  <SectionTitle main>Projects</SectionTitle>
  <GridContainer>
    {projects.map(({id, image, title, description, tags, source, visit, hideCode}) => (
      <BlogCard key={id}>
      <Img src={image} />
        <TitleContent>
          <HeaderThree title>{title}</HeaderThree>
          <hr/>
          <br/>
        </TitleContent>
        <CardInfo>{description}</CardInfo>
        <br/>
        <div>
           <TitleContent>Stack</TitleContent>
           <TagList>
             {tags.map((tag, i) => (
               <Tag key={i}>{tag}</Tag>
             ))}
           </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={visit} target="_blank" rel="noopener noreferrer">Visit</ExternalLinks>
          {!hideCode && <ExternalLinks href={source} target="_blank" rel="noopener noreferrer">Code</ExternalLinks>}
        </UtilityList>
      </BlogCard>
    ))}
  </GridContainer>
</Section>
);

export default Projects;