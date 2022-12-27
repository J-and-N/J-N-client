import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 500px;
`;
export const TempWrapper = styled.div`
  width: 500px;
  height: 450px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 25px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 5px;
`;
export const Line = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 1px;
  background: black;
  opacity: 0.4;
`;

export const Graph = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const GraphInfo = styled.div`
  width: 71%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  z-index: 300;
  opacity: 0.25;
`;

export const TempInfo = styled.div`
  width: 90%;
  height: 95px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  padding: 0 15px 0 15px;
  z-index: 300;
`;
export const TText = styled.div`
  font-size: 25px;
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
`;
export const TNum = styled.div`
  font-size: 50px;
  color: #ff0000;
`;
export const TC = styled.div`
  font-size: 40px;
`;

export const Date = styled.div`
  width: 560px;
  height: 50px;
  background: #fff;
  border-radius: 15px;
  /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); */
  margin-top: 20px;
  color: #878787;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
