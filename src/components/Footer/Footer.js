import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

import LinkItem from './LinkItem';

import logo from '../../images/author-logo.webp';

const socialMediaLinks = [
  {
    href: 'https://www.facebook.com/savo.ristic/',
    target: '_blank',
    rel: 'noreferrer',
    Icon: FaFacebookF,
    title: 'Facebook',
  },
  {
    href: 'https://www.linkedin.com/in/savo-ristic-sr/',
    target: '_blank',
    rel: 'noreferrer',
    Icon: FaLinkedinIn,
    title: 'LinkedIn',
  },
  {
    href: 'https://github.com/s-ristic/',
    target: '_blank',
    rel: 'noreferrer',
    Icon: FaGithub,
    title: 'Github',
  },
  {
    href: 'mailto:savoristic@pm.me',
    target: null,
    rel: null,
    Icon: FaEnvelope,
    title: 'savoristic@pm.me',
  },
];

function Footer() {
  return (
    <Container>
      <Description>Application made in React</Description>
      <SocialMedia>
        <ul>
          {socialMediaLinks.map((item) => (
            <LinkItem key={item.href} {...item} />
          ))}
        </ul>
      </SocialMedia>
      <Author>
        <span>Powered by</span>
        <a href='https://savo-ristic-portfolio.netlify.app' target='_blank' rel='noreferrer'>
          <img src={logo} alt='Logo' />
        </a>
      </Author>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  position: relative;
  width: 100%;
  padding: 1.5rem 5rem;
  background: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767.98px) {
    flex-direction: column;
  }
`;

const Description = styled.p`
  flex: 1;
  color: var(--light-color);
`;

const Author = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    color: var(--light-color);
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-right: 1rem;
  }

  a {
    height: 3rem;

    img {
      height: 100%;
    }
  }
`;

const SocialMedia = styled.div`
  flex: 1;

  @media screen and (max-width: 767.98px) {
    margin: 2rem 0;
  }

  ul {
    display: flex;
    justify-content: center;
  }

  li {
    margin: 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    font-size: 2rem;
    color: var(--light-color);

    &:hover {
      opacity: 0.5;
    }

    svg {
      display: block;
    }
  }
`;
