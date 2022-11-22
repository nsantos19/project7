/* 
Created by group to test ./fileUtility.js
*/

import assert from "node:assert";
import { fetchCurrentWeather } from "./fetchCurrentWeather.js";
import { writeToJSONFile, readFromJSONFile} from "./fileUtility.js";
import * as fs from 'fs';

test("writeToJSONFile creates file", ()=> {
   const path = "./fileCreated.json";
   const data = "test data";
   const promise = writeToJSONFile(path, data)
   assert(typeof promise === "object" && typeof promise.then === "function");
   promise.then((r) => {
      assert(fs.existsSync(path))
      fs.unlinkSync(path)
      assert(!fs.existsSync(path))
   });
})