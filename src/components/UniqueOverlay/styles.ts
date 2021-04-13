import styled from 'styled-components';
import { LogoSVG, BurgerSVG } from './IconSVG';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  min-height: 52px;

  .header__links {
    display: flex;
    gap: 15px;
    
    a {
      font-weight: 500;
        text-decoration: none;
        color: #000;

        &:hover {
          color: #111;
        }
      }
  }
  .header__logoImg {
    width: 90px;
    margin-right: 10px;
  }

  @media (max-width: 900px) {
    .header__links {
      display: none;
    }
  }
`;

export const Burger = styled(BurgerSVG)`
  width: 24px;
  height: 24px;
  cursor: pointer;

  padding-right: 5px;
`;

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;

      font-size: 14px;

      & + li {
        margin: 10px 0 0;
      }

      a {
        text-decoration: none;
        color: #000;

        &:hover {
          color: #000;
        }
      }
    }
  }

  .footer-emoji-heart{
    color: red;
  }
  margin-bottom: 10px;

  @media (min-width: 600px) {
    margin-bottom: 15px;

    ul {
      li + li {
        margin: 10px 0 0 0;
      }
    }
  }
`;
