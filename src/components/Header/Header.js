import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, Logo, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a><Logo>Imran Ahmed</Logo></a>
      </Link>
    </Div1>
    <Div2>
      <li><Link href="#projects"><NavLink>Projects</NavLink></Link></li>
      <li><Link href="#tech"><NavLink>Tech</NavLink></Link></li>
      <li><Link href="#about"><NavLink>About</NavLink></Link></li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ImranAhmed26" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="2.2rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/imran-ahmed-9a0375142/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="2.2rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/ahmmed_imraan" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram size="2.2rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
