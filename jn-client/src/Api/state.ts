import { ARCustomAxios, DataCustomAxios } from "../Util/lib/CustomAxios";
import { StatusController } from "../Util/lib/RequestUrl";

export const getTemperature = async (serverState: string | null) => {
  try {
    if (serverState == "Data server") {
      const { data } = await DataCustomAxios.get(
        StatusController.getTemperature()
      );
      return { data };
    } else if (serverState == "Arduino server") {
      const { data } = await ARCustomAxios.get(
        StatusController.getTemperature()
      );
      return { data };
    }
  } catch (e: any) {
    console.log(e);
  }
};

export const getHumidity = async (serverState: string | null) => {
  try {
    if (serverState == "Data server") {
      const { data } = await DataCustomAxios.get(
        StatusController.getHumidity()
      );
      return { data };
    } else if (serverState == "Arduino server") {
      const { data } = await ARCustomAxios.get(StatusController.getHumidity());
      return { data };
    }
  } catch (e: any) {
    console.log(e);
  }
};

export const getWaterState = async (serverState: string | null) => {
  try {
    if (serverState == "Data server") {
      const { data } = await DataCustomAxios.get(
        StatusController.getWaterState()
      );
      return { data };
    } else if (serverState == "Arduino server") {
      const { data } = await ARCustomAxios.get(
        StatusController.getWaterState()
      );
      return { data };
    }
  } catch (e: any) {
    console.log(e);
  }
};

export const getAvgTemperature = async (serverState: string | null) => {
  try {
    if (serverState == "Data server") {
      const { data } = await DataCustomAxios.get(
        StatusController.getAvgTemperature()
      );
      return { data };
    } else if (serverState == "Arduino server") {
      const { data } = await ARCustomAxios.get(
        StatusController.getAvgTemperature()
      );
      return { data };
    }
  } catch (e: any) {
    console.log(e);
  }
};
export const getAvgHumidity = async (serverState: string | null) => {
  try {
    if (serverState == "Data server") {
      const { data } = await DataCustomAxios.get(
        StatusController.getAvgHumidity()
      );
      return { data };
    } else if (serverState == "Arduino server") {
      const { data } = await ARCustomAxios.get(
        StatusController.getAvgHumidity()
      );
      return { data };
    }
  } catch (e: any) {
    console.log(e);
  }
};
