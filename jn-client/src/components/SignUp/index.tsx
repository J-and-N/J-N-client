import * as S from "./style";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { signup } from "../../Api/member";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState({ value: "", state: false, msg: "" });
  const [password, setPassword] = useState({
    value: "",
    state: false,
    msg: "",
  });
  const [passwordcheck, setPasswordcheck] = useState({
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

    const patten = /\S+@\S+\.\S+/;
    if (!email.value.match(patten)) {
      return setEmail({
        ...email,
        state: true,
        msg: "이메일 형식이 틀렸습니다.",
      });
    } else if (password.value.length < 8) {
      return setPassword({
        ...password,
        state: true,
        msg: "8자리 이상의 비밀번호를 사용하세요.",
      });
    } else if (password.value !== passwordcheck.value) {
      return setPasswordcheck({
        ...passwordcheck,
        state: true,
        msg: "비밀번호가 일치하지 않습니다.",
      });
    }

    signup(email.value, password.value).then(async (res) => {
      if (res?.data.message == "중복된 ID") {
        return setEmail({ ...email, state: true, msg: "중복된 이메일입니다." });
      } else {
        toast.success("회원가입 되었습니다");
        return router.push("/Sign/Signin");
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
              type="email"
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
          <S.Input
            placeholder="PASSWORD CHECK"
            type="password"
            onChange={(e) =>
              setPasswordcheck({
                ...passwordcheck,
                value: e.target.value,
                state: false,
                msg: "",
              })
            }
            style={{ border: passwordcheck.state ? "1px solid red" : "none" }}
          />
          <span>{passwordcheck.msg}</span>
        </S.InputWrapper>
        <S.Button
          onClick={() => {
            onSubmit();
          }}
        >
          Sign Up
        </S.Button>
        <Link href="Signin">
          <S.Signin>로그인하기</S.Signin>
        </Link>
      </S.SigninWrapper>
    </>
  );
};

export default Signup;
