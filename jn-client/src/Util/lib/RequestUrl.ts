//매안서버
export const MemberController = {
  ////메인서버

  //유저
  Signup: () => {
    return `/CUS/`;
  },
  Signin: () => {
    return `/LG/`;
  },
};

//Statuspage
export const StatusController = {
  ////데이터서버

  //온도
  getTemperature: () => {
    return `/LT/`;
  },
  //습도
  getHumidity: () => {
    return `/LH/`;
  },
  //남은 물
  getWaterState: () => {
    return `/LWT/`;
  },
  //평균 온도
  getAvgTemperature: () => {
    return `/AT/`;
  },
  //평균 습도
  getAvgHumidity: () => {
    return `/AH/`;
  },
};

//Recordpage
export const RecordController = {
  ////데이터서버

  //????????????????????????

  //페이지 온도
  getPageTemperature: (page: number) => {
    return `/MLT/${page}`;
  },
  //페이지 습도
  getPageHumidity: (page: number) => {
    return `/MLH/${page}`;
  },
};

//ServerPage
export const ServerController = {
  ////메인서버

  //사설서버리스트 반환
  getServerList: (id: number) => {
    return `/SL/${id}`;
  },
  //사설서버리스트 반환(설명포함)
  getServerDetailList: (id: number) => {
    return `/SV/${id}`;
  },
  //사설 서버 추가
  serverAdd: () => {
    return `/SV/`;
  },
  //사설 서버 수정
  serverModify: (id: number) => {
    return `/SV/${id}`;
  },
  //사설 서버 삭제
  serverDelete: (id: number) => {
    return `/SV/${id}`;
  },
};

//CameraPage
export const CameraController = {};
