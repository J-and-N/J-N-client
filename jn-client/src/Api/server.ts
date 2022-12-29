import { MainCustomAxios } from "../Util/lib/CustomAxios";
import { ServerController } from "../Util/lib/RequestUrl";

export const getServerList = async (id: number) => {
  try {
    const { data } = await MainCustomAxios.get(
      ServerController.getServerList(id)
    );
    return { data };
  } catch (e: any) {
    console.log(e);
  }
};

export const getServerDetailList = async (id: number) => {
  try {
    const { data } = await MainCustomAxios.get(
      ServerController.getServerDetailList(id)
    );
    return { data };
  } catch (e: any) {
    console.log(e);
  }
};

export const addServer = async () => {};
export const modifyServer = async () => {};
export const deleteServer = async () => {};
