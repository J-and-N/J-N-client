import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

type BarType = { state: string; hum: number | undefined };
export const Temp = styled.div`
  position: relative;
  width: 360px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  ::before {
    position: absolute;
    content: "";
    top: 50%;
    width: 100%;
    height: 50%;
    z-index: 300;
    background: #fff;
  }
`;
export const Progress = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  ::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: 65%;
    background-color: #fff;
    border-radius: 50%;
    z-index: 200;
  }
`;
const Rotate = keyframes`
  0%{
    transform: rotate(-90deg);
  }
`;

export const Bar = styled.div<BarType>`
  position: absolute;
  width: 50%;
  height: 100%;
  background: ${(e) => e.state};
  transform: rotate(calc(-90deg + calc(180 * calc(${(e) => e.hum}* 0.01deg))));
  transform-origin: center right;
  animation: ${Rotate} 2s ease-in-out;
  z-index: 100;
`;
export const Bar2 = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  background: #000;
  /* transform-origin: center right; */
  z-index: 90;
`;
export const Neele = styled.div<BarType>`
  position: absolute;
  width: 100%;
  height: 50%;
  background-color: #000 !important;
  clip-path: polygon(50% 0, 50% 0, 52% 100%, 48% 100%);
  transform: rotate(calc(-90deg + calc(180 * calc(${(e) => e.hum}* 0.01deg))));
  transform-origin: bottom center;
  animation: ${Rotate} 2s ease-in-out;
  z-index: 400;
`;
