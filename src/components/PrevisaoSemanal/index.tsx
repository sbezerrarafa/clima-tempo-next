import * as S from './style';

interface PrevisaoSemanalProps {
  tempMaxSemanal: string;
  tempMinSemanal: string;
}

export function PrevisaoSemanal(props: PrevisaoSemanalProps) {
  const diasDaSemana = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];

  const getCircularDay = (diasAdd: number) => {
    const diaAtual = new Date().getDay();
    let diaCerto = diaAtual;

    for (let i = 0; i < diasAdd; i++) {
      if (diaCerto === diasDaSemana.length - 1) {
        diaCerto = 0;
      }
      diaCerto++;
    }

    return diaCerto;
  };

  return (
    <S.ContainerPrevisaoSemanal>
      <S.DiasSemana>
        <span>Amanhã</span>
        <img src="weather-clouds.svg" alt="" />
        <S.MaxMinSemana>
          <p>
            {props.tempMaxSemanal &&
              parseInt(props.tempMaxSemanal[getCircularDay(1)])}
            °
          </p>
          <span>
            {props.tempMinSemanal &&
              parseInt(props.tempMinSemanal[getCircularDay(1)])}
            °
          </span>
        </S.MaxMinSemana>
      </S.DiasSemana>
      <S.DiasSemana>
        <span>{diasDaSemana[getCircularDay(2)]}</span>
        <img src="weather-clouds.svg" alt="" />
        <S.MaxMinSemana>
          <p>
            {props.tempMaxSemanal &&
              parseInt(props.tempMaxSemanal[getCircularDay(2)])}
            °
          </p>
          <span>
            {props.tempMinSemanal &&
              parseInt(props.tempMinSemanal[getCircularDay(2)])}
            °
          </span>
        </S.MaxMinSemana>
      </S.DiasSemana>
      <S.DiasSemana>
        <span>{diasDaSemana[getCircularDay(3)]}</span>
        <img src="weather-clouds.svg" alt="" />
        <S.MaxMinSemana>
          <p>
            {props.tempMaxSemanal &&
              parseInt(props.tempMaxSemanal[getCircularDay(3)])}
            °
          </p>
          <span>
            {props.tempMinSemanal &&
              parseInt(props.tempMinSemanal[getCircularDay(3)])}
            °
          </span>
        </S.MaxMinSemana>
      </S.DiasSemana>
      <S.DiasSemana>
        <span>{diasDaSemana[getCircularDay(4)]}</span>
        <img src="weather-clouds.svg" alt="" />
        <S.MaxMinSemana>
          <p>
            {props.tempMaxSemanal &&
              parseInt(props.tempMaxSemanal[getCircularDay(4)])}
            °
          </p>
          <span>
            {props.tempMinSemanal &&
              parseInt(props.tempMinSemanal[getCircularDay(4)])}
            °
          </span>
        </S.MaxMinSemana>
      </S.DiasSemana>
      <S.DiasSemana>
        <span>{diasDaSemana[getCircularDay(5)]}</span>
        <img src="weather-clouds.svg" alt="" />
        <S.MaxMinSemana>
          <p>
            {props.tempMaxSemanal &&
              parseInt(props.tempMaxSemanal[getCircularDay(5)])}
            °
          </p>
          <span>
            {props.tempMinSemanal &&
              parseInt(props.tempMinSemanal[getCircularDay(5)])}
            °
          </span>
        </S.MaxMinSemana>
      </S.DiasSemana>
    </S.ContainerPrevisaoSemanal>
  );
}
