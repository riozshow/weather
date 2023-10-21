import PickCity from "../PickCity/PickCity";
import WeatherSummary from "../WeatherSummary/WeatherSummary";
import Loader from "../Loader/Loader";
import { useCallback, useState } from "react";
import { WEATHER_API_KEY } from "../../settings";
import ErrorBox from "../ErrorBox/ErrorBox";

const WeatherBox = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState();

  const submitCity = useCallback(async (city) => {
    setIsLoading(true);
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`)
      .then((res) => res.json())
      .then((res) => (res.cod === 200 ? setWeatherData(res) : setWeatherData(city)));
    setIsLoading(false);
  }, []);

  return (
    <section>
      <PickCity submit={submitCity} />
      {typeof weatherData == "string" ? (
        <ErrorBox>City "{weatherData}" not found.</ErrorBox>
      ) : (
        <WeatherSummary data={weatherData} />
      )}
      <Loader isLoading={isLoading} />
    </section>
  );
};

export default WeatherBox;
