import styled from 'styled-components';

import car1 from '../../styles/images/cars/1.jpg';
import car2 from '../../styles/images/cars/2.jpg';
import car3 from '../../styles/images/cars/3.jpg';
import car4 from '../../styles/images/cars/4.jpg';
import accessories from '../../styles/images/accessories-img.jpg';
import powerwall from '../../styles/images/powerwall.jpg';
import banner from '../../styles/images/banner-img.jpg';

export const Container = styled.div`
  .colored:nth-child(1) {
    //background: #f1ffe7;
    background-image: url(${car1});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .colored:nth-child(2) {
    //background: #dfffd9;
    background-image: url(${car2});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .colored:nth-child(3) {
    //background: #cdfeca;
    background-image: url(${car3});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .colored:nth-child(4) {
    //background: #bbfebb;
    background-image: url(${car4});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .colored:nth-child(5) {
    //background: #a9fdac;
    background-image: url(${powerwall});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .colored:nth-child(6) {
    //background: #90f29c;
    background-image: url(${banner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .colored:nth-child(7) {
    //background: #77e68c;
    background-image: url(${accessories});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const Spacer = styled.div`
  height: 15vh;
`;
