import styled from 'styled-components';

export const ContainerPrevisaoSemanal = styled.section`
  grid-column: 2/4;
  display: flex;
  padding: 4rem;
  justify-content: space-between;
`;
export const DiasSemana = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  color: #fff;
  font-size: 1.6rem;
  line-height: 1.9rem;
  font-weight: bold;

  spam {
    color: #c2bff4;
  }
`;
export const MaxMinSemana = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
