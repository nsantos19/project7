import { writeToJSONFile ,readFromJSONFile} from "./fileUtility.js";
import { fetchUniversityWeather } from "./universityWeather.js";

//find warmest state
let uArray = []
readFromJSONFile('./src/inputUniversities.json').then(e => {
    uArray = e.Universities;
    let tempPArray = []
    e.Universities.forEach(u => tempPArray.push(fetchUniversityWeather(u)))
    return Promise.all(tempPArray);
}).then(tArray => {
    let index = 0
    for(let i = 0; i < uArray.length; i++){
        if(tArray[i].totalAverage > tArray[index].totalAverage){
            index = i;
        }
    }
    return {"Warmest University": uArray[index]}
}).then(obj => writeToJSONFile("./src/warmestUniversity.json",obj)).catch(err => "could not find warmest state: " + err);

