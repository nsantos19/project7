import { fetchCurrentWeather } from "./fetchCurrentWeather.js"
import { fetchLongitudeAndLatitude } from "./fetchLongitudeAndLatitude.js"
import { fetchUniversities } from "./fetchUniversities.js"

export function fetchUniversityWeather(query) {
    return fetchUniversities(query).then(uString =>{
      // turn string of unis into string of long and lat
      let locationPArray = []
      uString.forEach(u => locationPArray.push(fetchLongitudeAndLatitude(u)))
      return Promise.all(locationPArray);
    })
    //resolves the location array into actual longitudes and latitudes
     .then(locArray => {
      let weatherPArray = []
      locArray.forEach(l => weatherPArray.push(fetchCurrentWeather(l.lon,l.lat)))
      return Promise.all(weatherPArray);
     }).then(tempArr =>{
      let tAvgArr = []
      tempArr.forEach(obj => {
        let sum = obj.temperature_2m.reduce((acc,e) => acc + e, 0)
        tAvgArr.push(sum/obj.temperature_2m.length);
     })
     let totalAvg = tAvgArr.reduce((acc,e) => acc+e,0)/tAvgArr.length
     let returnObj = {};
     returnObj[totalAverage] = totalAvg;
     for(let i = 0; i < query.length; ++i){
       returnObj[query[i]] = tAvgArr[i];
     }
     return returnObj})
}

export function fetchUMassWeather() {
  // TODO
}

export function fetchUCalWeather() {
  // TODO
}
