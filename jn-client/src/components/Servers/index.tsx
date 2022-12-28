import * as S from "./style";
import Header from "../Header";
import Edit from "public/images/Edit.svg";
import Delete from "public/images/Delete.svg";
import Link from "next/link";

const Servers = () => {
  const ServerData = [
    {
      id: "1",
      servername: "sever",
      url: "http://127.0.0.1:8001",
      explanation:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean 마사. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
      id: "2",
      servername: "sever",
      url: "http://127.0.0.1:8002",
      explanation:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean 마사. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
      id: "3",
      servername: "sever",
      url: "http://127.0.0.1:8003",
      explanation:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean 마사. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
  ];
  return (
    <>
      <S.ServerWrapper>
        <Header />

        {ServerData.length !== 0 ? (
          <>
            <S.ListWrap>
              {ServerData.map((e) => (
                <S.List key={e.id}>
                  <S.ListB>
                    <S.TIWrap>
                      <S.Title>{e.servername}</S.Title>
                      <S.IconWrap>
                        <S.Icon>
                          <Edit />
                        </S.Icon>
                        <S.Icon>
                          <Delete />
                        </S.Icon>
                      </S.IconWrap>
                    </S.TIWrap>
                    <S.Url>
                      <p>URL :</p>
                      <Link href={e.url}>{e.url}</Link>
                    </S.Url>
                    <S.Explanation>
                      <p>Explanation</p>
                      {e.explanation}
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
          </>
        ) : (
          <></>
        )}
      </S.ServerWrapper>
    </>
  );
};

export default Servers;
