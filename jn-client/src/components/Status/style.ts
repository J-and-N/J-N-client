import styled from "@emotion/styled";

export const StatusWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ServerName = styled.span`
  font-size: 16px;
  opacity: 0.5;
  margin: 20px 0 10px 10px;
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
// export const Temp = styled.div``;
// export const Hum = styled.div``;
export const CaAndWa = styled.div`
  width: 510px;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Camera = styled.div`
  width: 100%;
  height: 250px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 15px;
`;
export const Title = styled.div`
  width: 100%;
  font-size: 25px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 10px;
  background: #000;
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;
export const Icon = styled.div`
  width: 30%;
  margin-left: 20px;
`;
export const Option = styled.div`
  width: 70%;
  /* background: #888; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.label`
  font-size: 15px;
  margin-right: 10px;
  opacity: 0.5;
`;
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

export const Detail = styled.div`
  font-size: 10px;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Water = styled.div`
  width: 100%;
  height: 260px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 15px;
  display: flex;
`;
export const WWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 55%;
  padding-right: 20px;
`;
export const WWrap2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  p {
    font-size: 25px;
    opacity: 0.25;
    padding-right: 10px;
  }
`;
export const Text = styled.div`
  font-size: 100px;
  color: #5b7fff;
  padding-right: 50px;
`;

export const WGraph = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const G = styled.div`
  position: relative;
  width: 160px;
  height: 240px;
  border: 5px solid #000;
  border-radius: 20px;
`;

type WGType = { state: number | undefined };

export const WG = styled.div<WGType>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: calc(10% * ${(e) => e.state});
  background: #5b7fff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  span {
    position: absolute;
    bottom: 0;
    left: 42%;
    font-size: 100px;
    color: red;
    display: ${(e) => (e.state == 0 ? "block" : "none")};
  }
`;

export const Date = styled.div`
  width: 100%;
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

export const ListText = styled.div`
  font-size: 20px;
  opacity: 0.5;
  margin: 10px 0 10px 40px;
`;

export const SListWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ServerList = styled.div`
  width: 95%;
  height: 108px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  padding: 10px;
`;

export const ListWrap = styled.div`
  width: 33%;
  display: flex;
  /* justify-content: space-between; */
  justify-content: space-evenly;
  padding: 0 20px;
`;

export const State = styled.div<Statetype>`
  width: 30px;
  height: 30px;
  background: ${(e) =>
    e.state == 1 ? "#05ff00" : e.state == 2 ? "gray" : "black"};
  border-radius: 50%;
`;
export const LServername = styled.div`
  font-size: 25px;
`;

export const SDetail = styled.div`
  position: absolute;
  font-size: 12px;
  color: #878787;
  bottom: 10px;
`;
type Statetype = { state: number };
