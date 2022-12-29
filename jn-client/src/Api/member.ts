import { MainCustomAxios } from "../Util/lib/CustomAxios";
import { MemberController } from "../Util/lib/RequestUrl";

export const signup = async (name: string, password: string) => {
  try {
    const { data } = await MainCustomAxios.post(MemberController.Signup(), {
      NAME: name,
      PASSWORD: password,
    });
    return { data };
  } catch (e: any) {
    console.log(e);
  }
};

export const signin = async (name: string, password: string) => {
  try {
    const { data } = await MainCustomAxios.post(MemberController.Signin(), {
      NAME: name,
      PASSWORD: password,
    });
    return { data };
  } catch (e: any) {
    console.log(e);
  }
};
