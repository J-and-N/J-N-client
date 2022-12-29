import { DataCustomAxios, ARCustomAxios } from "../Util/lib/CustomAxios";
import { RecordController } from "../Util/lib/RequestUrl";

export const getPageTemperature = async (
  page: number,
  serverState: string | null
) => {
  try {
    if (serverState == "Data server") {
      const { data } = await DataCustomAxios.get(
        RecordController.getPageTemperature(page)
      );
      return { data };
    } else if (serverState == "Arduino server") {
      const { data } = await ARCustomAxios.get(
        RecordController.getPageTemperature(page)
      );
      return { data };
    }
  } catch (e: any) {
    console.log(e);
  }
};

export const getPageHumidity = async (
  page: number,
  serverState: string | null
) => {
  try {
    if (serverState == "Data server") {
      const { data } = await DataCustomAxios.get(
        RecordController.getPageHumidity(page)
      );
      return { data };
    } else if (serverState == "Arduino server") {
      const { data } = await ARCustomAxios.get(
        RecordController.getPageHumidity(page)
      );
      return { data };
    }
  } catch (e: any) {
    console.log(e);
  }
};
