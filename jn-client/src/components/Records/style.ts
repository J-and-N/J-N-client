import styled from "@emotion/styled";

type TextType = { state: boolean };

export const RecordWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0 10px 30px;
`;
export const Line = styled.div`
  width: 1px;
  height: 30px;
  background: #000;
  margin-right: 10px;
`;
export const TempText = styled.div<TextType>`
  font-size: 25px;
  ${(e) => (e.state ? "color:#fa5f5f;" : "opacity: 0.3;")}
  margin-right: 10px;
  cursor: pointer;
`;
export const HumText = styled.div<TextType>`
  font-size: 25px;
  ${(e) => (e.state ? "opacity: 0.3;" : "color:#5b7fff;")}

  cursor: pointer;
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DListWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const DBack = styled.div`
  width: 93%;
  height: 280px;
  background: #fff;
  padding: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
export const Class = styled.div`
  width: 100%;
  height: 30px;
  font-size: 25px;
  margin-top: -10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.5;
  p:nth-of-type(1) {
    width: 5%;
    display: flex;
    justify-content: center;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    p:nth-of-type(1) {
      width: 10%;
      display: flex;
      justify-content: center;
    }
    p:nth-of-type(2) {
      width: 80%;
      display: flex;
      justify-content: center;
    }
  }
`;
export const DList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
`;
export const Wr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;
export const DNum = styled.div`
  margin-top: 5px;
`;
export const DTem = styled.div`
  margin-top: 5px;
`;
export const DDAte = styled.div``;

export const PageNum = styled.div`
  display: flex;
  justify-content: center;
  font-size: 29px;
  div {
    display: flex;
    opacity: 0.5;
    margin-left: 20px;
    margin-right: 20px;
  }
`;
export const Empty = styled.div`
  width: 30px;
  height: 30px;
`;
