import * as S from "./style";
import GraphRe from "../GraphRe";

const HumidityRe = ({ Date }: { Date: string }) => {
  return (
    <S.Wrapper>
      <S.HumWrapper>
        <S.Title>{Date}</S.Title>
        <S.Line></S.Line>
        <S.Graph>
          <GraphRe col={"#5b7fff"} />
        </S.Graph>
        <S.GraphInfo>
          <p>0%</p>
          <p>50%</p>
        </S.GraphInfo>
        <S.TempInfo>
          <S.TText>Hum</S.TText>
          <S.Info>
            <S.TNum>50</S.TNum>
            <S.TC>%</S.TC>
          </S.Info>
        </S.TempInfo>
      </S.HumWrapper>
    </S.Wrapper>
  );
};

export default HumidityRe;
