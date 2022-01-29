import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Heading = styled.div`
  margin-top: 22vh;
  text-align: center;

  @media (min-width: 600px) {
    margin-top: 16.5vh;
  }

  h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 49px;
    color: rgba(255, 255, 255, 0.95);
  }

  h2 {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.85);
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 130px;
  > button {
    background: #eb74ac;
    color: #fff;
    opacity: 0.8;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 13px 40px;
    border-radius: 20px;
    border: none;
    outline: 0;
    cursor: pointer;
    transition: all 0.3s ease;

    &.white {
      background: #fff;
      color: #1a1720;
      opacity: 0.65;
    }

    & + button {
      margin: 10px 0 0;
    }

    &:hover {
      opacity: 0.95;
      filter: brightness(1.1);
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 90px;

    > button + button {
      margin: 0 0 0 10px;
    }
  }
`;
