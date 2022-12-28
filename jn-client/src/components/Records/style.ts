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
export const DList = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
`;
export const Wr = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`;
export const DNum = styled.div``;
export const DTem = styled.div``;
export const DDAte = styled.div``;

export const PageNum = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
`;
