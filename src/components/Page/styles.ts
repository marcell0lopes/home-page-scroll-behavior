import styled from 'styled-components';
import teclado1Img from '../../assets/teclado1.jpg';
import teclado2Img from '../../assets/teclado3.jpg';
import teclado3Img from '../../assets/teclado2.jpg';
import teclado4Img from '../../assets/teclado4.jpg';
import teclado5Img from '../../assets/teclado5.jpg';
import teclado6Img from '../../assets/teclado6.jpg';
import teclado7Img from '../../assets/teclado7.jpg';

export const Container = styled.main`
  height: 100vh;
  overflow: hidden;

  .colored:nth-child(1) {
    background: #fff;
  }
  .colored:nth-child(2) {
    background: #dfffd9;
    background-image: url(${teclado1Img});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(3) {
    background: #cdfeca;
    background-image: url(${teclado2Img});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(4) {
    background: #bbfebb;
    background-image: url(${teclado3Img});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(5) {
    background: #a9fdac;
    background-image: url(${teclado4Img});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(6) {
    background: #90f29c;
    background-image: url(${teclado5Img});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(7) {
    background: #77e68c;
    background-image: url(${teclado6Img});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(8) {
    background: #5fb870;
    background-image: url(${teclado7Img});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #fff;
`;
