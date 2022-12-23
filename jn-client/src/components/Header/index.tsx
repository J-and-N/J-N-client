import * as S from "./style";
import Gauge from "public/images/Gauge.svg";
import WGauge from "public/images/Wgauge.svg";
import Document from "public/images/Document.svg";
import WDocument from "public/images/WDocument.svg";
import Servers from "public/images/Servers.svg";
import WServers from "public/images/WServers.svg";
import Camera from "public/images/Camera.svg";
import WCamera from "public/images/WCamera.svg";
import UserIcon from "public/images/UserIcon.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const route = useRouter();
  const ad = route.pathname as string;

  const adFillter = (e: string, a: string) => {
    return a == e ? true : false;
  };
  return (
    <>
      <S.Header>
        <S.Logo>J&N</S.Logo>
        <S.MenuWrap>
          <Link href="Statu">
            <S.Menu state={adFillter("/Statu", ad)}>
              <S.Icon>
                {adFillter("/Statu", ad) ? <Gauge /> : <WGauge />}
              </S.Icon>
              <S.IText>Status</S.IText>
            </S.Menu>
          </Link>
          <Link href="Record">
            <S.Menu state={adFillter("/Record", ad)}>
              <S.Icon>
                {adFillter("/Record", ad) ? <Document /> : <WDocument />}
              </S.Icon>
              <S.IText>Record</S.IText>
            </S.Menu>
          </Link>
          <Link href="Server">
            <S.Menu state={adFillter("/Server", ad)}>
              <S.Icon>
                {adFillter("/Server", ad) ? <Servers /> : <WServers />}
              </S.Icon>
              <S.IText>Server</S.IText>
            </S.Menu>
          </Link>
          <Link href="Camera">
            <S.Menu state={adFillter("/Camera", ad)}>
              <S.Icon>
                {adFillter("/Camera", ad) ? <Camera /> : <WCamera />}
              </S.Icon>
              <S.IText>Camera</S.IText>
            </S.Menu>
          </Link>
        </S.MenuWrap>
        <S.UserWrap>
          <S.UserIcon>
            <UserIcon />
          </S.UserIcon>
          <S.Wrap>
            <S.UserName>Hi, Userasdfname</S.UserName>
            <S.Signout>Sign Out</S.Signout>
          </S.Wrap>
        </S.UserWrap>
      </S.Header>
    </>
  );
};

export default Header;
