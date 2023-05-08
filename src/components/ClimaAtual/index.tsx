import * as S from './style';

interface ClimaAtualProps {
  tempAtual: string | number;
  tempMax: string;
  tempMin: string;
  velocidadeVento: string;
  umidade: string;
  previsaoChuva: string;
}

export function ClimaAtual(props: ClimaAtualProps) {
  return (
    <S.ContainerClimaAtual>
      <S.Localizacao>
        <img src="pin.svg" alt="icone-local" />
        <span>Olinda,Pe</span>
      </S.Localizacao>
      <S.ContainerTemp>
        <S.TempAtual>
          <h2>{props.tempAtual}</h2>
          <S.Celsius>°C</S.Celsius>
        </S.TempAtual>
        <S.MaxMin>
          <p>{props.tempMax}°</p>
          <span>{props.tempMin}°</span>
        </S.MaxMin>
      </S.ContainerTemp>
      <S.Rodape>
        <S.Estatisticas>
          <img src="temp-wind.svg" alt="velocidade-vento" />
          <S.Info>
            <p>Vento</p>
            <span>{props.velocidadeVento} km/h</span>
          </S.Info>
        </S.Estatisticas>
        <S.Estatisticas>
          <img src="temp-humidity.svg" alt="umidade-do-ar" />
          <S.Info>
            <p>Umidade</p>
            <span>{props.umidade}%</span>
          </S.Info>
        </S.Estatisticas>
        <S.Estatisticas>
          <img src="temp-rain.svg" alt="possibilidade-de-chuva" />
          <S.Info>
            <p>Chuva</p>
            <span>{props.previsaoChuva}%</span>
          </S.Info>
        </S.Estatisticas>
      </S.Rodape>
    </S.ContainerClimaAtual>
  );
}
