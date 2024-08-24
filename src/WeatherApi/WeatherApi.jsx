import React, { useState, useEffect } from 'react';

const apiKey = '04c8e2c5b7102d73a3138c3831013c0d'; // Reemplaza con tu clave API real
const lat = '40.7128'; // Latitud de Nueva York
const lon = '-74.0060'; // Longitud de Nueva York
const exclude = 'hourly,daily'; // Excluir datos horarios y diarios

// Construir la URL correcta para el endpoint 2.5
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiKey}&units=metric`;

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error en la consulta: ' + response.statusText);
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                setError(error.message);
            }
        }

        fetchWeather();
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!weatherData) return <div>Cargando...</div>;

    return (
        <div>
            <h1>Clima Actual</h1>
            <p>Temperatura: {weatherData.current.temp} °C</p>
            <p>Condición: {weatherData.current.weather[0].description}</p>
            <p>Humedad: {weatherData.current.humidity} %</p>
        </div>
    );
}

export default Weather;
