import * as S from "./style";
import TemperatureRe from "../common/TemperatureRe";
import HumidityRe from "../common/HumidityRe";
import Header from "../Header";
import { useState } from "react";

const Records = () => {
  const TempData = [
    { num: "18866", tem: "26", date: "2022-10-27 22:24:32" },
    { num: "18867", tem: "26", date: "2022-10-27 22:24:32" },
    { num: "18868", tem: "26", date: "2022-10-27 22:24:32" },
    { num: "18869", tem: "26", date: "2022-10-27 22:24:32" },
    { num: "18870", tem: "26", date: "2022-10-27 22:24:32" },
  ];
  const PageD = [1, 2, 3, 4, 5];

  const [TextState, setTextState] = useState(true);

  const chgTempState = () => {
    setTextState(true);
  };
  const chgHumState = () => {
    setTextState(false);
  };

  return (
    <>
      <S.RecordWrapper>
        <Header />
        <S.TextWrap>
          <S.TempText state={TextState} onClick={() => chgTempState()}>
            Temperature
          </S.TempText>
          <S.Line />
          <S.HumText state={TextState} onClick={() => chgHumState()}>
            Humidity
          </S.HumText>
        </S.TextWrap>
        {TextState ? (
          <>
            <S.ContentWrap>
              <TemperatureRe Date={"Now"} />
              <TemperatureRe Date={"Day"} />
              <TemperatureRe Date={"Week"} />
            </S.ContentWrap>
            <S.DListWrap>
              <S.DBack>
                {TempData.length !== 0 ? (
                  TempData.map((e) => (
                    <S.DList key={e.num}>
                      <S.DNum>{e.num}</S.DNum>
                      <S.Wr>
                        <S.DTem>{e.tem}°C</S.DTem>
                        <S.DDAte>{e.date}</S.DDAte>
                      </S.Wr>
                    </S.DList>
                  ))
                ) : (
                  <p>기록이 없습니다.</p>
                )}
                <S.PageNum>{PageD.map((e) => e)}</S.PageNum>
              </S.DBack>
            </S.DListWrap>
          </>
        ) : (
          <>
            <S.ContentWrap>
              <HumidityRe Date={"Now"} />
              <HumidityRe Date={"Day"} />
              <HumidityRe Date={"Week"} />
            </S.ContentWrap>
            <S.DListWrap>
              <S.DBack>
                {TempData.length !== 0 ? (
                  TempData.map((e) => (
                    <S.DList key={e.num}>
                      <S.DNum>{e.num}</S.DNum>
                      <S.Wr>
                        <S.DTem>{e.tem}°C</S.DTem>
                        <S.DDAte>{e.date}</S.DDAte>
                      </S.Wr>
                    </S.DList>
                  ))
                ) : (
                  <p>기록이 없습니다.</p>
                )}
                <S.PageNum>{PageD.map((e) => e)}</S.PageNum>
              </S.DBack>
            </S.DListWrap>
          </>
        )}
      </S.RecordWrapper>
    </>
  );
};

export default Records;
