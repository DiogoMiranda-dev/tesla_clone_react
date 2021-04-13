import React from 'react';
import { useTransform } from 'framer-motion';

import { useWrapperScroll } from '../Model';

import { Container, Header, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <a href="/">
          <img
            className="header__logoImg"
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
          />
        </a>
        <div className="header__links">
          <a href="/">Modelo S</a>
          <a href="/">Modelo 3</a>
          <a href="/">Modelo X</a>
          <a href="/">Modelo Y</a>
          <a href="/">Powerwall</a>
          <a href="/">Painéis solares</a>
          <a href="/">Acessórios</a>
        </div>
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            Feito com{' '}
            <span
              role="img"
              aria-label="coração"
              className="footer-emoji-heart"
            >
              ❤
            </span>{' '}
            por{' '}
            <a href="http://diogomiranda.dev.br/" target="__blank">
              <strong>Diogo Miranda</strong>
            </a>
          </li>
          <li>
            Direitos de imagem para{' '}
            <a href="https://www.tesla.com/pt_pt" target="__blank">
              <strong>tesla.com</strong>
            </a>{' '}
            <br />
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
