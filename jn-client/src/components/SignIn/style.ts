import styled from "@emotion/styled";

export const SigninWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24%;
  border: 1px solid black;
  background: #ffffff;
`;
export const Logo = styled.div`
  font-size: 120px;
  margin-bottom: 150px;
  font-family: "IM Fell Great Primer SC";
`;
export const InputWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  width: 100%;
  height: 60px;
  padding-left: 20px;
  font-size: 20px;
  border: none;
  outline: none;
  /* background: #eeeeee; */
  /* background: #f2f2f2; */
  background: #fff;
  margin-bottom: 40px;
  border-radius: 15px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
`;
export const Button = styled.div`
  width: 500px;
  height: 50px;
  color: #fff;
  background: #7fc55b;
  /* background: #d3ffd2; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const Signup = styled.div`
  width: 100%;
  margin-top: 20px;
  color: #adadad;
  font-size: 15px;
  cursor: pointer;
`;
