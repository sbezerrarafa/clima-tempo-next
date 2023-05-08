import axios from 'axios';

export const getClimaAtual = async () => {
  return axios.get(
    'https://api.open-meteo.com/v1/forecast?latitude=-8.0089&longitude=-34.8553&hourly=precipitation_probability,temperature_2m,relativehumidity_2m,rain,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo',
  );
};

export const getQualidadeDoArAtual = async () => {
  return axios.get(
    'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=-8.0089&longitude=-34.8553&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,european_aqi&timezone=America%2FSao_Paulo',
  );
};
