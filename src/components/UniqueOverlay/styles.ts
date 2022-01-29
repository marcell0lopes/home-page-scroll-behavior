import styled from 'styled-components';
import { LogoSVG, BurgerSVG } from './IconSVG';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 3rem;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  min-height: 52px;

  @media (min-width: 600px) {
    top: 0;
  }
`;

export const Logo = styled(LogoSVG)`
  height: 17px;
  cursor: pointer;
`;

export const Burger = styled(BurgerSVG)`
  width: 24px;
  height: 24px;
  cursor: pointer;

  padding-right: 5px;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;

    li {
      list-style: none;
      font-size: 14px;

      a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.75);

        &:hover {
          color: #fff;
        }
      }
    }
  }

  @media (min-width: 600px) {
    ul {
      gap: 3rem;
      margin-bottom: 38px;

      li + li {
        margin: 0 0 0 30px;
      }
    }
  }
`;
