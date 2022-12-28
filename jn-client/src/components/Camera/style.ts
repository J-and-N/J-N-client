import styled from "@emotion/styled";

export const CamerasWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrap = styled.div`
  width: 90%;
  height: 80%;
  margin-top: 30px;
  display: flex;
`;

export const CameraWrap = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PlayerWrap = styled.div`
  width: 750px;
  height: 550px;
  background: #d9d9d9;
  border-radius: 20px;
  margin-bottom: 20px;
`;
// export const Player = styled.div``;

export const PlayIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
export const Option = styled.div`
  width: 70%;
  /* background: #888; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
// export const Label = styled.label`
//   font-size: 15px;
//   margin-right: 10px;
//   opacity: 0.5;
// `;
export const Select = styled.select`
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  color: #878787;
  :focus {
    color: #000;
  }
`;

export const BtnWrap = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BtnContent = styled.div`
  width: 360px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Button = styled.div<BtnType>`
  width: 100%;
  height: 160px;
  background: ${(e) => e.state};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;
export const BtnText = styled.div`
  font-size: 40px;
  color: #fff;
`;
export const BtnAroow = styled.div``;

type BtnType = { state: string };
