import * as S from "./style";
const GraphRe = ({ col, hum }: { col: string; hum: number | undefined }) => {
  const chkTemp = () => {
    if (typeof hum === "number") {
      if (hum <= 0) {
        return 0;
      } else {
        return hum;
      }
    }
  };
  return (
    <S.Temp>
      <S.Progress>
        <S.Bar state={col} hum={chkTemp()}></S.Bar>
        <S.Bar2></S.Bar2>
        <S.Neele state={col} hum={chkTemp()}></S.Neele>
      </S.Progress>
    </S.Temp>
  );
};

export default GraphRe;
