import * as S from "./style";
import Link from "next/link";

const index = () => {
  return (
    <>
      <S.MainWrapper>
        <S.Header>
          <S.Logo>J&N</S.Logo>
          <S.BtnWrap>
            <Link href="/Sign/Signup">
              <S.Button>SignUp</S.Button>
            </Link>
            <Link href="/Sign/Signin">
              <S.Button>SignIn</S.Button>
            </Link>
          </S.BtnWrap>
        </S.Header>
        <S.Content>
          <p>J&N</p>
        </S.Content>
      </S.MainWrapper>
    </>
  );
};

export default index;
