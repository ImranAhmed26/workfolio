import React from "react";

import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 16, text: "Months of volunteering under IEEE AIUB Student Branch" },
  { number: 10, text: "Production apps across web and mobile — TypeScript, Node.js, React, Angular, Flutter" },
  { number: 3, text: "Certificates in React, Web Development and front-end UI Frameworks" },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
