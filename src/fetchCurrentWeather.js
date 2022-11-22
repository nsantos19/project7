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
<<<<<<< HEAD
      //console.log(json.hourly.time)
      let obj = {};
      obj.time = json.hourly.time;
      obj.temperature_2m = json.hourly.temperature_2m;
      
      return obj
=======
      return {time: json.hourly.time, temperature_2m: json.hourly.temperature_2m}
>>>>>>> 45ec98c66577b608117190c82b21ad51ec01e52d
    }
  )
  .catch(err => console.log("Unable to get weather with: " + err));
}
