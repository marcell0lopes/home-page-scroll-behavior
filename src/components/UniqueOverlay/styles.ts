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
  padding: 0 3rem;
  min-height: 52px;
  max-width: 1120px;
  margin: 0.5rem auto;
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
        padding-bottom: 0.5rem;
        transition: all 0.3s;

        &:hover {
          color: #fff;
          border-bottom: 2px solid #eb74ac;
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
