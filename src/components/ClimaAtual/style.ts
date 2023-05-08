import styled from 'styled-components';

export const ContainerClimaAtual = styled.section`
  background: url('bg-temp-now.jpeg') no-repeat;
  grid-row: 1/3;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :before {
    content: '';
    width: 17.6rem;
    height: 17.6rem;
    background: url('../clouds.svg') no-repeat;
    position: absolute;
    top: -5.6rem;
    left: -5.6rem;
    animation: go-back 1.7s infinite alternate;
  }
  @keyframes go-back {
    from {
      transform: translateX(40px);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const Localizacao = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  color: #c2bff4;
  padding: 3.2rem;

  span {
    font-size: 1.4rem;
  }
`;

export const ContainerTemp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 7rem;
`;
export const TempAtual = styled.div`
  display: flex;
  align-items: center;

  h2 {
    color: #fff;
    font-size: 8.8rem;
    font-weight: bold;
  }
`;
export const Celsius = styled.div`
  font-size: 2.4rem;
  color: #dad8f7;
  font-weight: bold;
  margin-bottom: 4.8rem;
`;
export const MaxMin = styled.div`
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  display: flex;

  span {
    color: #c2bff4;
  }
`;
export const Rodape = styled.div`
  display: flex;
  padding: 1.2rem;
  gap: 0.8rem;
`;
export const Estatisticas = styled.div`
  color: #e7e6fb;
  gap: 1.2rem;
  display: flex;
  align-items: center;
  flex: 1;
  background: rgba(102, 96, 200, 0.6);
  padding: 1.4rem 1.6rem;
  border-radius: 1rem;

  p {
    font-size: 1.2rem;
  }
  span {
    font-size: 1.7rem;
    font-weight: bold;
  }
`;
export const Info = styled.div``;
