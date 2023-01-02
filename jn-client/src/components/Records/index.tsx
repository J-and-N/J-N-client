import * as S from "./style";
import TemperatureRe from "../common/TemperatureRe";
import HumidityRe from "../common/HumidityRe";
import Header from "../Header";
import { useEffect, useState } from "react";
import { getAvgTemperature, getAvgHumidity } from "../../Api/state";
import { getPageTemperature, getPageHumidity } from "../../Api/record";
import { AvgType } from "../../types/graph";
import { tempPageType, humPageType } from "../../types/record";
import dateFillter from "../../Util/lib/dateFillter";
import ArrowLeft from "public/images/ArrowLeft.svg";
import ArrowRight from "public/images/ArrowRight.svg";

const Records = () => {
  const [tempAvg, setTempAvg] = useState<AvgType>();
  const [humAvg, setHumAvg] = useState<AvgType>();
  const [pageTemp, setPageTemp] = useState<tempPageType[]>([]);
  const [pageHum, setPageHum] = useState<humPageType[]>([]);
  const [pageNum, setPageNum] = useState(1);

  const [TextState, setTextState] = useState(true);
  // const [sever, setSever] = useState<severType>();

  const prevPageClick = async () => {
    setPageNum(pageNum - 1);
    const sever = localStorage.getItem("Servername");

    return TextState
      ? getPageTemperature(pageNum - 1, sever).then((res) => {
          setPageTemp(res?.data);
        })
      : getPageHumidity(pageNum - 1, sever).then((res) => {
          setPageHum(res?.data);
        });
  };
  const nextPageClick = async () => {
    setPageNum(pageNum + 1);
    const sever = localStorage.getItem("Servername");

    return TextState
      ? getPageTemperature(pageNum + 1, sever).then((res) => {
          setPageTemp(res?.data);
        })
      : getPageHumidity(pageNum + 1, sever).then((res) => {
          setPageHum(res?.data);
        });
  };

  useEffect(() => {
    const sever = localStorage.getItem("Servername");
    // setSever(sever);
    getAvgTemperature(sever).then((res) => {
      setTempAvg(res?.data);
    });
    getAvgHumidity(sever).then((res) => {
      setHumAvg(res?.data);
    });
    getPageTemperature(1, sever).then((res) => {
      console.log(res?.data);
      setPageTemp(res?.data);
    });
    getPageHumidity(1, sever).then((res) => {
      console.log(res?.data);
      setPageHum(res?.data);
    });
  }, []);

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
              <TemperatureRe Date={"Now"} TEMP={tempAvg?.now} />
              <TemperatureRe Date={"Day"} TEMP={tempAvg?.day} />
              <TemperatureRe Date={"Week"} TEMP={tempAvg?.week} />
            </S.ContentWrap>
            <S.DListWrap>
              <S.DBack>
                <S.Class>
                  <p>ID</p>
                  <div>
                    <p>TEMP</p>
                    <p>Date</p>
                  </div>
                </S.Class>
                {pageTemp.length !== 0 ? (
                  pageTemp.map((e) => (
                    <S.DList key={e.id}>
                      <S.DNum>{e.id}</S.DNum>
                      <S.Wr>
                        <S.DTem>{e.TEMP}°C</S.DTem>
                        <S.DDAte>{dateFillter(e.TIME)}</S.DDAte>
                      </S.Wr>
                    </S.DList>
                  ))
                ) : (
                  <p>기록이 없습니다.</p>
                )}
                <S.PageNum>
                  {pageNum === 1 ? (
                    <>
                      <S.Empty></S.Empty>
                    </>
                  ) : (
                    <div onClick={prevPageClick}>
                      <ArrowLeft />
                    </div>
                  )}
                  <label>{pageNum}</label>
                  <div onClick={nextPageClick}>
                    <ArrowRight />
                  </div>
                </S.PageNum>{" "}
              </S.DBack>
            </S.DListWrap>
          </>
        ) : (
          <>
            <S.ContentWrap>
              <HumidityRe Date={"Now"} HUM={humAvg?.now} />
              <HumidityRe Date={"Day"} HUM={humAvg?.day} />
              <HumidityRe Date={"Week"} HUM={humAvg?.week} />
            </S.ContentWrap>
            <S.DListWrap>
              <S.DBack>
                <S.Class>
                  <p>ID</p>
                  <div>
                    <p>HUM</p>
                    <p>Date</p>
                  </div>
                </S.Class>
                {pageHum.length !== 0 ? (
                  pageHum.map((e) => (
                    <S.DList key={e.id}>
                      <S.DNum>{e.id}</S.DNum>
                      <S.Wr>
                        <S.DTem>{e.DEGREE}%</S.DTem>
                        <S.DDAte>{dateFillter(e.TIME)}</S.DDAte>
                      </S.Wr>
                    </S.DList>
                  ))
                ) : (
                  <p>기록이 없습니다.</p>
                )}
                <S.PageNum>
                  {pageNum === 1 ? (
                    <>
                      <S.Empty></S.Empty>
                    </>
                  ) : (
                    <div onClick={prevPageClick}>
                      <ArrowLeft />
                    </div>
                  )}
                  <label>{pageNum}</label>
                  <div onClick={nextPageClick}>
                    <ArrowRight />
                  </div>
                </S.PageNum>
              </S.DBack>
            </S.DListWrap>
          </>
        )}
      </S.RecordWrapper>
    </>
  );
};

export default Records;
