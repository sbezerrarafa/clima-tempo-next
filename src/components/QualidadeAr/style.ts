import styled from 'styled-components';

export const ContainerQualidadeAr = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 3.2rem;
`;
export const ContainerTitulo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-top: 3.2rem;

  h5 {
    color: #dad8f7;
    font-weight: bold;
    font-size: 1.6rem;
  }
`;
export const QualidadeArAtual = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #87ebcd;
    font-size: 1.8rem;
  }
  span {
    color: #e7e6fb;
    font-size: 4rem;
  }
`;
export const ContainerInfoComposicaoAr = styled.div`
  display: flex;
  padding: 1.6rem;
  width: 100%;
  justify-content: space-around;
`;
export const DescQualidadeAr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 2px;

  p {
    color: #87ebcd;
    font-size: 1.4rem;
  }
  small {
    color: #e7e6fb;
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: 400;
  }
`;
