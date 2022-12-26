import * as S from "./style";
const GraphRe = ({ col }: { col: string }) => {
  return (
    <S.Temp>
      <S.Progress>
        <S.Bar state={col}></S.Bar>
        <S.Bar2></S.Bar2>
        <S.Neele></S.Neele>
      </S.Progress>
    </S.Temp>
  );
};

export default GraphRe;
