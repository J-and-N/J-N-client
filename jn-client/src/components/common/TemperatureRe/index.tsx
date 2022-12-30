import * as S from "./style";
import GraphRe from "../GraphReTemp";

const TemperatureRe = ({
  Date,
  TEMP,
}: {
  Date: string;
  TEMP: number | undefined;
}) => {
  return (
    <S.Wrapper>
      <S.TempWrapper>
        <S.Title>{Date}</S.Title>
        <S.Line />
        <S.Graph>
          <GraphRe col={"#fa5f5f"} temp={TEMP} />
        </S.Graph>
        <S.GraphInfo>
          <p>0°C</p>
          <p>50°C</p>
        </S.GraphInfo>
        <S.TempInfo>
          <S.TText>TEMP</S.TText>
          <S.Info>
            <S.TNum>{TEMP?.toFixed(0)}</S.TNum>
            <S.TC>°C</S.TC>
          </S.Info>
        </S.TempInfo>
      </S.TempWrapper>
    </S.Wrapper>
  );
};

export default TemperatureRe;
