import { fetchCurrentWeather } from "./fetchCurrentWeather.js"
import { fetchLongitudeAndLatitude } from "./fetchLongitudeAndLatitude.js"
import { fetchUniversities } from "./fetchUniversities.js"

export function fetchUniversityWeather(query) {
  let uniArray = []
    return fetchUniversities(query).then(uString =>{
      // turn string of unis into string of promises
      uniArray = uString
      let locationPArray = []
      uString.forEach(u => locationPArray.push(fetchLongitudeAndLatitude(u)))
      //turns that string of promises into string of locations
      return Promise.all(locationPArray);
    })
     .then(locArray => {
      let weatherPArray = []
  
       //turns string of locations into string of weather promises
      locArray.forEach(l => weatherPArray.push(fetchCurrentWeather(l.lon,l.lat)))
       //turns that string of promises into string of weather objects
      return Promise.all(weatherPArray);
     }).then(tempArr =>{

      let tAvgArr = []
       //finds the average for each weather object
        tempArr.forEach(obj => {
        let sum = obj.temperature_2m.reduce((acc,e) => acc + e, 0)
        tAvgArr.push(sum/obj.temperature_2m.length);
     })
       //finds the total average
     let totalAvg = tAvgArr.reduce((acc,e) => acc+e,0)/tAvgArr.length
     let returnObj = {};
       //add total average to weather object
     returnObj["totalAverage"] = totalAvg;
       //adds the rest of the object using the university names
     for(let i = 0; i < uniArray.length; ++i){
       returnObj[uniArray[i] ]= tAvgArr[i];
     }
    
       //returns object
     return returnObj})
}

export function fetchUMassWeather() {
   return fetchUniversityWeather("University of Massachusetts");
}

export function fetchUCalWeather() {
  return fetchUniversityWeather("University of California");
}
