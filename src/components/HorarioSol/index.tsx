import * as S from './style';

interface HorarioSolProps {
  horarioAtual: string;
  nascerDoSol: string;
  porDoSol: string;
}

export function HorarioSol(props: HorarioSolProps) {
  return (
    <S.ContainerHorarioSol>
      <S.TituloHorario>
        <img src="sun-time.svg" alt="icone-horario-sol" />
        <h5>Horário do Sol</h5>
      </S.TituloHorario>
      <S.ContainerGraficoSol>
        <S.GraficoSol>
          <S.SombraSol />
        </S.GraficoSol>
        <S.HorarioSol>{props.horarioAtual}</S.HorarioSol>
        <S.BolinhaHorarioSol />
      </S.ContainerGraficoSol>
      <S.BaseHorario>
        <p>{props.nascerDoSol}</p>
        <p>{props.porDoSol}</p>
      </S.BaseHorario>
    </S.ContainerHorarioSol>
  );
}
