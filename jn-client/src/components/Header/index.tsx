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
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const ad = router.pathname as string;
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");
    user ? setUsername(user) : "";
  }, []);

  const adFillter = (e: string, a: string) => {
    return a == e ? true : false;
  };

  const onSubmit = () => {
    localStorage.removeItem("Farm_accessToken");
    localStorage.removeItem("Farm_refreshToken");
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    toast.success("로그아웃 되었습니다");
    return router.push("/");
  };

  return (
    <>
      <S.Header>
        <S.Logo
          onClick={() => {
            router.push("/Server");
          }}
        >
          J&N
        </S.Logo>
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
            <S.UserName>Hi, {username}</S.UserName>
            <S.Signout onClick={onSubmit}>Sign Out</S.Signout>
          </S.Wrap>
        </S.UserWrap>
      </S.Header>
    </>
  );
};

export default Header;
