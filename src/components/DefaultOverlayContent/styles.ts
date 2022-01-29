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
  filter: drop-shadow(0 0.2rem 0.2rem rgba(0, 0, 0, 0.25));

  @media (min-width: 600px) {
    margin-top: 16.5vh;
  }

  h1 {
    font-weight: 700;
    font-size: 4rem;
    line-height: 4.8rem;
    color: rgba(255, 255, 255, 0.95);
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: rgba(255, 255, 255, 0.9);
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
    opacity: 0.9;

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
      opacity: 0.85;
    }

    & + button {
      margin: 10px 0 0;
    }

    &:hover {
      opacity: 1;
      filter: brightness(1.25);
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
