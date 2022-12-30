import * as S from "./style";
import Graph from "../GraphHum";
import { Humtype } from "../../../types/graph";
import { NextPage } from "next";
import dateFillter from "../../../Util/lib/dateFillter";

const Humidity: NextPage<Humtype> = ({ id, DEGREE, TIME }) => {
  return (
    <S.Wrapper>
      <S.HumWrapper>
        <S.Title>Humidity</S.Title>
        <S.Line></S.Line>
        <S.Graph>
          <Graph col={"#5b7fff"} hum={DEGREE} />
        </S.Graph>
        <S.GraphInfo>
          <p>0%</p>
          <p>100%</p>
        </S.GraphInfo>
        <S.TempInfo>
          <S.TText>HUM</S.TText>
          <S.Info>
            <S.TNum>{DEGREE}</S.TNum>
            <S.TC>%</S.TC>
          </S.Info>
        </S.TempInfo>
      </S.HumWrapper>
      <S.Date>{dateFillter(TIME)}</S.Date>
    </S.Wrapper>
  );
};

export default Humidity;
