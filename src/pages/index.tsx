import * as S from '../styles/stylesIndex';
import { useState, useEffect } from 'react';

import { ClimaAtual } from '../components/ClimaAtual';
import { HorarioSol } from '../components/HorarioSol';
import { QualidadeAr } from '../components/QualidadeAr';
import { PrevisaoSemanal } from '../components/PrevisaoSemanal';

import * as api from '../api/api';

interface CLimaProps {
  current_weather?: any;
  temperature: any;
  hourly?: any;
  daily?: any;
}

interface HorarioSolInterface {
  sunset: any;
  sunrise: any;
  time: any;
}

export default function Home() {
  const [clima, setClima] = useState<CLimaProps>();
  const [qualidadeAr, setQualidadeAr] = useState(null);

  const getClimaAtual = async () => {
    const { data } = await api.getClimaAtual();
    console.log(data);
    setClima(data);
  };

  const getQualidadeDoArAtual = async () => {
    const { data } = await api.getQualidadeDoArAtual();

    setQualidadeAr(data);
  };

  useEffect(() => {
    getQualidadeDoArAtual();
    getClimaAtual();

    console.log(clima);
  }, []);

  const getSunTime = (props: HorarioSolInterface) => {
    let now = new Date();
    let horaAtual = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    let nascerDoSol = clima?.daily?.sunset[0];
    let porDoSol = clima?.daily?.sunrise[0];

    const convertidoNascerDoSol = nascerDoSol.slice(11);
    const convertidoPorDoSol = porDoSol.slice(11);

    return {
      convertidoNascerDoSol,
      convertidoPorDoSol,
      horaAtual,
      nascerDoSol,
      porDoSol,
    };
  };

  return (
    <S.ContainerGeral>
      <ClimaAtual
        tempAtual={parseInt(clima?.current_weather?.temperature || '')}
        tempMax={clima?.daily.temperature_2m_max[0]}
        tempMin={clima?.daily?.temperature_2m_min[0]}
        velocidadeVento={clima?.current_weather.windspeed}
        umidade={clima?.hourly?.relativehumidity_2m[0]}
        previsaoChuva={clima?.hourly?.precipitation_probability[0]}
      />
      <QualidadeAr />
      <HorarioSol
        horarioAtual={getSunTime().horaAtual}
        nascerDoSol={getSunTime().convertidoNascerDoSol}
        porDoSol={getSunTime().convertidoPorDoSol}
      />
      <PrevisaoSemanal
        tempMaxSemanal={clima?.daily?.temperature_2m_max}
        tempMinSemanal={clima?.daily?.temperature_2m_min}
      />
    </S.ContainerGeral>
  );
}
