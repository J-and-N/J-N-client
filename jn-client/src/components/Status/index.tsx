import * as S from "./style";
import Temperature from "../common/Temperature/index";
import Humidity from "../common/Humidity";
import Header from "../Header";
import Camera from "public/images/Camera2.svg";
import { useEffect, useState } from "react";
import { getTemperature, getHumidity, getWaterState } from "../../Api/state";
import { getServerList } from "../../Api/server";
import { Temptype, Humtype, Watertype } from "../../types/graph";
import { ServerListType } from "../../types/Server";
import dateFillter from "../../Util/lib/dateFillter";

const Status = () => {
  const [servername, setServername] = useState("");
  const [temperature, setTemperature] = useState<Temptype>();
  const [humidity, setHumidity] = useState<Humtype>();
  const [water, setWater] = useState<Watertype>();
  const [serverList, setServerList] = useState<ServerListType[]>([]);

  useEffect(() => {
    const sever = localStorage.getItem("Servername");
    sever ? setServername(sever) : "";
    ReturnTemperature(sever);
    ReturnWater(sever);

    getServerList(6).then((res) => {
      console.log(res?.data);
      setServerList(res?.data);
    });
  }, []);

  const ReturnTemperature = (servers: string | null) => {
    getTemperature(servers).then((res) => {
      setTemperature(res?.data);
    });
    getHumidity(servers).then((res) => {
      setHumidity(res?.data);
    });
  };
  const ReturnWater = (servers: string | null) => {
    getWaterState(servers).then((res) => {
      setWater(res?.data);
    });
  };

  return (
    <>
      <S.StatusWrapper>
        <Header />
        <S.ServerName>This server is {servername}</S.ServerName>
        <S.ContentWrap>
          <Temperature
            id={temperature?.id}
            TEMP={temperature?.TEMP}
            TIME={temperature?.TIME}
          />
          <Humidity
            id={humidity?.id}
            DEGREE={humidity?.DEGREE}
            TIME={humidity?.TIME}
          />
          <div>
            <S.CaAndWa>
              <S.Camera>
                <S.Title>Camera</S.Title>
                <S.Line />
                <S.Wrap>
                  <S.Icon>
                    <Camera />
                  </S.Icon>
                  <S.Option>
                    <S.Label>This:</S.Label>
                    <S.Select>
                      <option>-- 카메라를 선택하세요 --</option>
                      <option>카메라1</option>
                      <option>카메라2</option>
                      <option>카메라3</option>
                      <option>카메라4</option>
                    </S.Select>
                  </S.Option>
                </S.Wrap>
                <S.Detail>
                  ※ A screen appears when you tap the camera. ※
                </S.Detail>
              </S.Camera>
              <S.Water>
                <S.WWrap>
                  <S.Title>Water</S.Title>
                  <S.Line />
                  <S.WWrap2>
                    <S.Text>{water?.WATER}</S.Text>
                    <p>floor</p>
                  </S.WWrap2>
                </S.WWrap>
                <S.WGraph>
                  <S.G>
                    <S.WG state={water?.WATER}>
                      <span>!</span>
                    </S.WG>
                  </S.G>
                </S.WGraph>
              </S.Water>
            </S.CaAndWa>
            <S.Date>{dateFillter(water?.TIME)}</S.Date>
          </div>
        </S.ContentWrap>
        <S.ListText>Server List</S.ListText>
        <S.SListWrap>
          <S.ServerList>
            {serverList.map((e) => (
              <S.ListWrap key={e.id}>
                <S.LServername>{e.TITLE}</S.LServername>
                <S.State state={e.STATUS} />
              </S.ListWrap>
            ))}
            <S.SDetail>
              ※ Green: Online Gray: Server only online Black: Server down ※
            </S.SDetail>
          </S.ServerList>
        </S.SListWrap>
      </S.StatusWrapper>
    </>
  );
};

export default Status;
