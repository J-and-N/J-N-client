import styled from "@emotion/styled";

type adType = { state: boolean };

export const Header = styled.div`
  background-color: #2bae66;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px 0 30px;
`;

export const Logo = styled.div`
  width: 30%;
  height: 100%;
  font-size: 50px;
  font-family: "IM Fell Great Primer SC";
  color: white;
  cursor: pointer;
`;

export const MenuWrap = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.div<adType>`
  ${(props) =>
    props.state
      ? "background:#e1f4d7; box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25); color: #000 !important; "
      : ""};
  width: 95px;
  height: 90px;
  margin-right: 4px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
`;

export const Icon = styled.div``;
export const IText = styled.div`
  margin-top: -3px;
  margin-bottom: 3px;
  font-size: 20px;
`;

export const UserWrap = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const UserIcon = styled.div`
  width: 50px;
  height: 100%;
  margin: 30px 10px 0 0;
  display: flex;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserName = styled.p`
  width: 100%;
  font-size: 25px;
  color: white;
`;

export const Signout = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 25px;
  font-size: 15px;
  background: #fff;
  border-radius: 50px;
  margin-top: 10px;
  border: none;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
`;
