import fetch from "node-fetch";

//fetchCurrentWeather(longitude: number, latitude: number): Promise<{ time: string[], temperature_2m: number[] }>
export function fetchCurrentWeather(longitude, latitude) {
  const searchURL = new URL("https://api.open-meteo.com/v1/forecast");
  searchURL.searchParams.append("latitude", latitude)
  searchURL.searchParams.append("longitude", longitude)
  searchURL.searchParams.append("hourly", "temperature_2m")
  searchURL.searchParams.append("temperature_unit", "fahrenheit")
  return fetch(searchURL)
  .then(response => response.json()) // parse the result to a json
  .then(
    json => {
      console.log(json.hourly.time)
      return {"time" : new Array(obj.hourly.time), "temperature_2m": new Array(obj.hourly.temperature_2m)}
    }
  )
  .catch(err => console.log("Unable to get weather with: " + err));
}
