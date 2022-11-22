import fetch from "node-fetch";

//fetchCurrentWeather(longitude: number, latitude: number): Promise<{ time: string[], temperature_2m: number[] }>
export function fetchCurrentWeather(longitude, latitude) {
  const searchURL = new URL("https://api.open-meteo.com/v1/forecast");
  searchURL.searchParams.append("latitude", latitude)
  searchURL.searchParams.append("longitude", longitude)
  searchURL.searchParams.append("hourly", "temperature_2m")
  searchURL.searchParams.append("temperature_unit", "fahrenheit")
  return fetch(searchURL)
  .then(response => response.json())
  .then(
    json => {
      return {time: json.hourly.time, temperature_2m: json.hourly.temperature_2m}
    }
  )
  .catch(err => console.log("Unable to get weather with: " + err));
}
