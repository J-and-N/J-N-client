import styled from "@emotion/styled";

export const ServerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ListWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px;
  display: flex;
  flex-wrap: wrap;
`;

export const List = styled.div`
  width: 33.3333%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListB = styled.div`
  width: 95%;
  height: 95%;
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;
export const TIWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 30px;
`;
export const IconWrap = styled.div`
  width: 11%;
  display: flex;
  justify-content: space-between;
`;
export const Icon = styled.div`
  cursor: pointer;
`;
export const Url = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  p {
    margin: -3px 5px 0 0;
    font-size: 17px;
  }
`;
export const Explanation = styled.div`
  margin: 20px 0 0 20px;
  p {
    margin: 0 0 10px -20px;
    font-size: 17px;
    opacity: 0.5;
  }
`;

export const AddBtnWrap = styled.div`
  width: 33.3333%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AddBtn = styled.div`
  width: 95%;
  height: 95%;
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const AddText = styled.div`
  font-size: 30px;
  color: #ff0000;
`;
export const AddDetail = styled.div`
  font-size: 17px;
  opacity: 0.5;
`;
