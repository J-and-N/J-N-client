import * as S from "./style";
import Link from "next/link";
import { signin } from "../../Api/member";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState({ value: "", state: false, msg: "" });
  const [password, setPassword] = useState({
    value: "",
    state: false,
    msg: "",
  });

  const onSubmit = () => {
    if (email.value.length == 0) {
      console.log("email x");
      return setEmail({ ...email, state: true, msg: "이메일을 입력해주세요." });
    }
    if (password.value.length == 0) {
      console.log("password x");
      return setPassword({
        ...password,
        state: true,
        msg: "비밀번호을 입력해주세요.",
      });
    }

    signin(email.value, password.value).then(async (res) => {
      if (res?.data.message == "잘못된 id") {
        return setEmail({ ...email, state: true, msg: "잘못된 ID입니다" });
      } else if (res?.data.message == "잘못된 password") {
        return setPassword({
          ...password,
          state: true,
          msg: "잘못된 PASSWORD입니다.",
        });
      } else if (res?.data.message == "오류 발생") {
        return toast.error("다시 시도해주세요.");
      } else {
        localStorage.setItem("Farm_accessToken", res?.data.accessToken);
        localStorage.setItem("Farm_refreshToken", res?.data.refreshToken);
        localStorage.setItem("id", res?.data.id);
        localStorage.setItem("username", res?.data.name);
        toast.success("로그인 되었습니다");
        console.log(res?.data.id);
        return router.push("/Server");
      }
    });
  };
  return (
    <>
      <S.SigninWrapper>
        <S.Logo>J&N</S.Logo>
        <S.InputWrapper>
          <S.InputWrap>
            <S.Input
              placeholder="ID"
              type="text"
              onChange={(e) =>
                setEmail({
                  ...email,
                  value: e.target.value,
                  state: false,
                  msg: "",
                })
              }
              style={{ border: email.state ? "1px solid red" : "none" }}
            />
            <span>{email.msg}</span>
          </S.InputWrap>
          <S.InputWrap>
            <S.Input
              placeholder="PASSWORD"
              type="password"
              onChange={(e) =>
                setPassword({
                  ...password,
                  value: e.target.value,
                  state: false,
                  msg: "",
                })
              }
              style={{ border: password.state ? "1px solid red" : "none" }}
            />
            <span>{password.msg}</span>
          </S.InputWrap>
        </S.InputWrapper>
        <S.Button onClick={onSubmit}>Sign In</S.Button>
        <Link href="Signup">
          <S.Signup>계정이 없으신가요? 회원가입하기</S.Signup>
        </Link>
      </S.SigninWrapper>
    </>
  );
};
export default Signin;
