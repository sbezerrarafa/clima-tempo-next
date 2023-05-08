import styled from 'styled-components';

export const ContainerHorarioSol = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TituloHorario = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-top: 3.2rem;
  margin-bottom: 3.5rem;

  h5 {
    color: #dad8f7;
    font-weight: bold;
    font-size: 1.6rem;
  }
`;

export const ContainerGraficoSol = styled.div`
  position: relative;
  height: 100px;
  width: 200px;
`;
export const GraficoSol = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 110px;
  width: 200px;
  margin-top: -40px;
  margin-left: -100px;
  border-radius: 0 0 100px 100px;
  transform: rotate(180deg);
  border: 1px dashed #e5bb46;
  background: linear-gradient(
    180deg,
    rgba(251, 219, 96, 0.2) 0%,
    rgba(251, 219, 96, 0) 101.89%
  );
  overflow: hidden;
  z-index: -1;
`;

export const SombraSol = styled.div`
  background: #6d67d0;
  height: 110px;
`;

export const HorarioSol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 3;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #fff;
`;

export const BolinhaHorarioSol = styled.div`
  position: absolute;
  top: 105px;
  left: -9px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #e5bb46;
`;

export const BaseHorario = styled.div`
  margin-top: 30px;
  width: 240px;
  display: flex;
  justify-content: space-between;
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
`;
