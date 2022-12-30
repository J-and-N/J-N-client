import * as S from "./style";
const GraphRe = ({ col, temp }: { col: string; temp: number | undefined }) => {
  const chkTemp = () => {
    if (typeof temp === "number") {
      if (temp <= 0) {
        return 0;
      } else {
        return temp;
      }
    }
  };
  return (
    <S.Temp>
      <S.Progress>
        <S.Bar state={col} temp={chkTemp()}></S.Bar>
        <S.Bar2></S.Bar2>
        <S.Neele state={col} temp={chkTemp()}></S.Neele>
      </S.Progress>
    </S.Temp>
  );
};

export default GraphRe;
