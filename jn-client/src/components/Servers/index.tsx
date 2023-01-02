import * as S from "./style";
import Header from "../Header";
import Edit from "public/images/Edit.svg";
import Delete from "public/images/Delete.svg";
import Link from "next/link";
import { getServerDetailList } from "../../Api/server";
import { useEffect, useState } from "react";
import { ServerType } from "../../types/Server";
import { useRouter } from "next/router";

const Servers = () => {
  // const ID = localStorage.getItem("id");
  const router = useRouter();
  const [ServerData, setServerData] = useState<ServerType[]>([]);

  useEffect(() => {
    getServerDetailList(6).then((res) => {
      console.log(res?.data);
      setServerData(res?.data);
    });
  }, []);

  const onSubmit = (title: string) => {
    console.log(title);
    localStorage.setItem("Servername", title);
    router.push("/Statu");
  };
  const onDelete = () => {};
  const onModify = () => {};

  return (
    <>
      <S.ServerWrapper>
        <Header />

        {ServerData.length !== 0 ? (
          <S.ListWrap>
            {ServerData.map((e) => (
              <S.List key={e.id}>
                <S.ListB>
                  <S.TIWrap>
                    <S.Title
                      onClick={() => {
                        onSubmit(e.TITLE);
                      }}
                    >
                      {e.TITLE}
                    </S.Title>
                    <S.IconWrap>
                      <S.Icon
                        onClick={() => {
                          console.log("수정");
                        }}
                      >
                        <Edit />
                      </S.Icon>
                      <S.Icon
                        onClick={() => {
                          console.log("삭제");
                        }}
                      >
                        <Delete />
                      </S.Icon>
                    </S.IconWrap>
                  </S.TIWrap>
                  <S.Url>
                    <p>URL :</p>
                    <Link href={e.LINK}>{e.LINK}</Link>
                  </S.Url>
                  <S.Explanation>
                    <p>Explanation</p>
                    {e.CENTENT}
                  </S.Explanation>
                </S.ListB>
              </S.List>
            ))}
            {ServerData.length !== 6 ? (
              <S.AddBtnWrap>
                <S.AddBtn>
                  <S.AddText>+Add</S.AddText>
                  <S.AddDetail>Max server is 6</S.AddDetail>
                </S.AddBtn>
              </S.AddBtnWrap>
            ) : (
              <></>
            )}
          </S.ListWrap>
        ) : (
          <></>
        )}
      </S.ServerWrapper>
    </>
  );
};

export default Servers;
