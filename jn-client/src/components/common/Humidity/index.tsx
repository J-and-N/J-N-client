import * as S from "./style";
import Graph from "../Graph";
const Humidity = () => {
  return (
    <S.Wrapper>
      <S.HumWrapper>
        <S.Title>Humidity</S.Title>
        <S.Line></S.Line>
        <S.Graph>
          <Graph col={"#5b7fff"} />
        </S.Graph>
        <S.GraphInfo>
          <p>0%</p>
          <p>50%</p>
        </S.GraphInfo>
        <S.TempInfo>
          <S.TText>HUM</S.TText>
          <S.Info>
            <S.TNum>50</S.TNum>
            <S.TC>%</S.TC>
          </S.Info>
        </S.TempInfo>
      </S.HumWrapper>
      <S.Date>2022-10-27 22:24:32</S.Date>
    </S.Wrapper>
  );
};

export default Humidity;
