import * as S from "./style";
import Graph from "../Graph";
const Temperature = () => {
  return (
    <S.Wrapper>
      <S.TempWrapper>
        <S.Title>Temperature</S.Title>
        <S.Line></S.Line>
        <S.Graph>
          <Graph col={"#fa5f5f"} />
        </S.Graph>
        <S.GraphInfo>
          <p>0°C</p>
          <p>50°C</p>
        </S.GraphInfo>
        <S.TempInfo>
          <S.TText>TEMP</S.TText>
          <S.Info>
            <S.TNum>25</S.TNum>
            <S.TC>°C</S.TC>
          </S.Info>
        </S.TempInfo>
      </S.TempWrapper>
      <S.Date>2022-10-27 22:24:32</S.Date>
    </S.Wrapper>
  );
};

export default Temperature;
