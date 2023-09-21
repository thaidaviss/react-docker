import { LoadingIcon } from '@assets/index';
import styled from 'styled-components/macro';

function Loading() {
  return (
    <LoadingStyle>
      <LoadingIcon />
    </LoadingStyle>
  );
}

export default Loading;
const LoadingStyle = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 80px;
  max-width: 80%;
  height: 400px;
  max-height: 100%;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .st0 {
    fill: #fffbee;
  }
  .st1 {
    fill: #f7db63;
  }
  .st2 {
    fill: #ffe861;
  }
  @-webkit-keyframes squeeze {
    0% {
      -webkit-transform: scale(1, 1) translate(0px, 0);
    }
    30% {
      -webkit-transform: scale(0.9, 1) translate(12px, 0);
    }
    40% {
      -webkit-transform: scale(0.9, 1) translate(12px, 0);
    }
    70% {
      -webkit-transform: scale(1, 1) translate(0px, 0);
    }
  }
  @keyframes squeeze {
    0% {
      transform: scale(1, 1) translate(0px, 0);
    }
    30% {
      transform: scale(0.9, 1) translate(12px, 0);
    }
    50% {
      transform: scale(0.9, 1) translate(12px, 0);
    }
    80% {
      transform: scale(1, 1) translate(0px, 0);
    }
  }
  @-webkit-keyframes drop {
    0% {
      opacity: 0;
      -webkit-transform: translate(0, -20px);
    }
    10% {
      opacity: 1;
    }
    15% {
      opacity: 1;
    }
    30% {
      opacity: 0;
      -webkit-transform: translate(0, 30px);
    }
  }
  @keyframes drop {
    0% {
      opacity: 0;
      transform: translate(0, -20px);
    }
    10% {
      opacity: 1;
    }
    15% {
      opacity: 1;
    }
    30% {
      opacity: 0;
      transform: translate(0, 30px);
    }
  }
  #lemon {
    -webkit-animation: squeeze 1.5s ease-in-out infinite;
    animation: squeeze 1.5s ease-in-out infinite;
  }
  #drop1 {
    opacity: 0;
    -webkit-animation: drop 1.5s ease-in 0.8s infinite;
    animation: drop 1.5s ease-in 0.8s infinite;
  }
  #drop2 {
    opacity: 0;
    -webkit-animation: drop 1.5s ease-in 0.3s infinite;
    animation: drop 1.5s ease-in 0.3s infinite;
  }
  #drop3 {
    opacity: 0;
    -webkit-animation: drop 1.5s ease-in 0.8s infinite;
    animation: drop 1.5s ease-in 0.8s infinite;
  }
`;
