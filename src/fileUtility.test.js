/* 
Created by group to test ./fileUtility.js
*/

import assert from "node:assert";
import { fetchCurrentWeather } from "./fetchCurrentWeather.js";
import { writeToJSONFile, readFromJSONFile} from "./fileUtility.js";
import * as fs from 'fs';

test("writeToJSONFile creates file", async ()=> {
   const path = "./fileCreated.json";
   const data = "test data";
   const weather = await fetchCurrentWeather(42.36, -71.05);
   await writeToJSONFile(path, "test data")
   //assert(typeof promise === "object" && typeof promise.then === "function");
   console.log(typeof weather);
   
   promise.then((r) => {
      assert(fs.existsSync(path))
      assert
      fs.unlinkSync(path)
      assert(!fs.existsSync(path))
   });
})