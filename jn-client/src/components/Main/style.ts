import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const Header = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 0 20px;
`;
export const Logo = styled.div`
  font-size: 40px;
  font-family: "IM Fell Great Primer SC";
  /* padding: 10px 0 0 20px; */
`;
export const BtnWrap = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Button = styled.div`
  width: 120px;
  height: 30px;
  background: #acffaa;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-items: center; */
  cursor: pointer;
`;

export const Content = styled.div`
  width: 100%;
  height: 93vh;
  background: #dbfacb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150px;
  font-family: "IM Fell Great Primer SC";
`;
