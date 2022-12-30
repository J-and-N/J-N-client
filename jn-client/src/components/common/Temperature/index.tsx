import * as S from "./style";
import Graph from "../GraphTemp";
import { Temptype } from "../../../types/graph";
import { NextPage } from "next";
import dateFillter from "../../../Util/lib/dateFillter";
const Temperature: NextPage<Temptype> = ({ id, TEMP, TIME }) => {
  return (
    <S.Wrapper>
      <S.TempWrapper>
        <S.Title>Temperature</S.Title>
        <S.Line></S.Line>
        <S.Graph>
          <Graph col={"#fa5f5f"} temp={TEMP} />
        </S.Graph>
        <S.GraphInfo>
          <p>0°C</p>
          <p>50°C</p>
        </S.GraphInfo>
        <S.TempInfo>
          <S.TText>TEMP</S.TText>
          <S.Info>
            <S.TNum>{TEMP}</S.TNum>
            <S.TC>°C</S.TC>
          </S.Info>
        </S.TempInfo>
      </S.TempWrapper>
      <S.Date>{dateFillter(TIME)}</S.Date>
    </S.Wrapper>
  );
};

export default Temperature;
