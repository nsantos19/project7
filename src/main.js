import { writeToJSONFile ,readFromJSONFile} from "./fileUtility.js";
import { fetchUniversityWeather } from "./universityWeather.js";



readFromJSONFile('./src/inputUniversities.json').then(e => console.log(e.Universities));

console.log('hello')