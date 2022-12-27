import * as S from "./style";
import GraphRe from "../GraphRe";

// type GraphType = { Date: string };
const TemperatureRe = ({ Date }: { Date: string }) => {
  return (
    <S.Wrapper>
      <S.TempWrapper>
        <S.Title>{Date}</S.Title>
        <S.Line></S.Line>
        <S.Graph>
          <GraphRe col={"#fa5f5f"} />
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
    </S.Wrapper>
  );
};

export default TemperatureRe;
