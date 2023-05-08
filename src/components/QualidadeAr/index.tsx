import * as S from './style';

export function QualidadeAr() {
  return (
    <S.ContainerQualidadeAr>
      <S.ContainerTitulo>
        <img src="leaf.svg" alt="icone-qualidade ar" />
        <h5>Qualidade do ar</h5>
      </S.ContainerTitulo>
      <S.QualidadeArAtual>
        <p>Boa</p>
        <span>21</span>
      </S.QualidadeArAtual>
      <S.ContainerInfoComposicaoAr>
        <S.DescQualidadeAr>
          <p>12.9</p>
          <small>PM2.5</small>
        </S.DescQualidadeAr>
        <S.DescQualidadeAr>
          <p>12.9</p>
          <small>PM10</small>
        </S.DescQualidadeAr>
        <S.DescQualidadeAr>
          <p>12.9</p>
          <small>SO₂</small>
        </S.DescQualidadeAr>
        <S.DescQualidadeAr>
          <p>12.9</p>
          <small>NO₂</small>
        </S.DescQualidadeAr>
        <S.DescQualidadeAr>
          <p>12.9</p>
          <small>O₃</small>
        </S.DescQualidadeAr>
        <S.DescQualidadeAr>
          <p>12.9</p>
          <small>CO</small>
        </S.DescQualidadeAr>
      </S.ContainerInfoComposicaoAr>
    </S.ContainerQualidadeAr>
  );
}
