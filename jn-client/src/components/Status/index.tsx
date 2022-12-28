import * as S from "./style";
import Temperature from "../common/Temperature/index";
import Humidity from "../common/Humidity";
import Header from "../Header";
import Camera from "public/images/Camera2.svg";

const Status = () => {
  return (
    <>
      <S.StatusWrapper>
        <Header />

        <S.ServerName>This server is (SERVERNAME)</S.ServerName>

        <S.ContentWrap>
          <Temperature />
          <Humidity />
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
                      <option>대충 옵션1</option>
                      <option>대충 옵션2</option>
                      <option>대충 옵션3</option>
                      <option>대충 옵션4</option>
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
                    <S.Text>0</S.Text>
                    <p>floor</p>
                  </S.WWrap2>
                </S.WWrap>
                <S.WGraph>
                  <S.G>!</S.G>
                </S.WGraph>
              </S.Water>
            </S.CaAndWa>
            <S.Date>2022-10-27 22:24:32</S.Date>
          </div>
        </S.ContentWrap>
        <S.ListText>Server List</S.ListText>
        <S.SListWrap>
          <S.ServerList>
            <S.ListWrap>
              <S.State state={"#05ff00"} />
              <S.LServername>Servername</S.LServername>
            </S.ListWrap>
            <S.ListWrap>
              <S.State state={"#05ff00"} />
              <S.LServername>Servername</S.LServername>
            </S.ListWrap>
            <S.ListWrap>
              <S.State state={"#05ff00"} />
              <S.LServername>Servername</S.LServername>
            </S.ListWrap>
            <S.ListWrap>
              <S.State state={"#05ff00"} />
              <S.LServername>Servername</S.LServername>
            </S.ListWrap>
            <S.ListWrap>
              <S.State state={"#05ff00"} />
              <S.LServername>Servername</S.LServername>
            </S.ListWrap>
            <S.ListWrap>
              <S.State state={"#05ff00"} />
              <S.LServername>Servername</S.LServername>
            </S.ListWrap>
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
