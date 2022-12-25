import * as S from "./style";
import Link from "next/link";
const index = () => {
  return (
    <>
      <S.SigninWrapper>
        <S.Logo>J&N</S.Logo>
        <S.InputWrapper>
          <S.Input placeholder="ID" />
          <S.Input placeholder="PASSWORD" type="password" />
          <S.Input placeholder="PASSWORD CHECK" type="password" />
        </S.InputWrapper>
        <S.Button>Sign Up</S.Button>
        <Link href="Signin">
          <S.Signin>로그인하기</S.Signin>
        </Link>
      </S.SigninWrapper>
    </>
  );
};

export default index;
