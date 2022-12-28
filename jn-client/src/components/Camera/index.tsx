import * as S from "./style";
import Header from "../Header";
import PlayerIcon from "public/images/PlayerIcon.svg";
import Arrow from "public/images/Arrow.svg";

const Cameras = () => {
  return (
    <>
      <S.CamerasWrapper>
        <Header />

        <S.ContentWrap>
          <S.CameraWrap>
            <S.PlayerWrap>
              {/* <S.Player> */}
              <S.PlayIcon>
                <PlayerIcon />
              </S.PlayIcon>
              {/* </S.Player> */}
            </S.PlayerWrap>
            <S.Wrap>
              <S.Option>
                {/* <S.Label>This:</S.Label> */}
                <S.Select>
                  <option>-- 카메라를 선택하세요 --</option>
                  <option>대충 옵션1</option>
                  <option>대충 옵션2</option>
                  <option>대충 옵션3</option>
                  <option>대충 옵션4</option>
                </S.Select>
              </S.Option>
            </S.Wrap>
          </S.CameraWrap>

          <S.BtnWrap>
            <S.BtnContent>
              <S.Button state="#5B7FFF">
                <S.BtnText>Add</S.BtnText>
                <S.BtnAroow>
                  <Arrow />
                </S.BtnAroow>
              </S.Button>
              <S.Button state="#2DC271">
                <S.BtnText>Modify</S.BtnText>
                <S.BtnAroow>
                  <Arrow />
                </S.BtnAroow>
              </S.Button>
              <S.Button state="#FF7373">
                <S.BtnText>Delete</S.BtnText>
                <S.BtnAroow>
                  <Arrow />
                </S.BtnAroow>
              </S.Button>
            </S.BtnContent>
          </S.BtnWrap>
        </S.ContentWrap>
      </S.CamerasWrapper>
    </>
  );
};

export default Cameras;
