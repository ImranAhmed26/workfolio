import React from 'react';
import { SiNodeDotJs, SiAngular, SiAmazonaws } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
 <SectionDivider/>
 <br/>
 <br/>

 <SectionTitle>Technologies</SectionTitle>
 <SectionText>
   I build across the full stack — from performant APIs and backend services to polished, responsive frontends — using modern tools and cloud infrastructure to ship production-ready products.
 </SectionText>
 <List>

 <ListItem>
     <SiNodeDotJs size="3rem"/>
       <ListContainer>
         <ListTitle>Back-End</ListTitle>
         <ListParagraph>
           <br/>
           Node JS <br/>
           Go <br/>
           Express <br/>
           NestJS <br/>
           Supabase
         </ListParagraph>
       </ListContainer>
   </ListItem>

   <ListItem>
     <SiAngular size="3rem"/>
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>
            <br/>
           React <br/>
           Angular <br/>
           Flutter <br/>
           Swift <br/>
           Next JS <br/>
           TanStack Start
         </ListParagraph>
       </ListContainer>
   </ListItem>

   <ListItem>
     <SiAmazonaws size="3rem"/>
       <ListContainer>
         <ListTitle>Cloud & Data</ListTitle>
         <ListParagraph>
            <br/>
           AWS <br/>
           Claude Code <br/>
           PostgreSQL <br/>
           MongoDB <br/>
           DigitalOcean 
         </ListParagraph>
       </ListContainer>
   </ListItem>

 </List>


</Section>
);

export default Technologies;
