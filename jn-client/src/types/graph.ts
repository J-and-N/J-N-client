export interface Temptype {
  id: number | undefined;
  TEMP: number | undefined;
  TIME: string | undefined;
}
export interface Humtype {
  id: number | undefined;
  DEGREE: number | undefined;
  TIME: string | undefined;
}

export interface Watertype {
  id: number | undefined;
  WATER: number | undefined;
  TIME: string | undefined;
}

export interface AvgType {
  now: number;
  day: number;
  week: number;
}
