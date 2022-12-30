import * as S from "./style";
const Graph = ({ col, hum }: { col: string; hum: number | undefined }) => {
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
    <S.Hum>
      <S.Progress>
        <S.Bar state={col} hum={chkTemp()}></S.Bar>
        <S.Bar2></S.Bar2>
        <S.Neele state={col} hum={chkTemp()}></S.Neele>
      </S.Progress>
    </S.Hum>
  );
};

export default Graph;
