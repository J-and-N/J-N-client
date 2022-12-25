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
        </S.InputWrapper>
        <S.Button>Sign In</S.Button>
        <Link href="Signup">
          <S.Signup>계정이 없으신가요? 회원가입하기</S.Signup>
        </Link>
      </S.SigninWrapper>
    </>
  );
};

export default index;
