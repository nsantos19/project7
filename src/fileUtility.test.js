/* 
Created by group to test ./fileUtility.js
*/

import assert from "node:assert";
import { fetchCurrentWeather } from "./fetchCurrentWeather.js";
import { writeToJSONFile, readFromJSONFile} from "./fileUtility.js";
import * as fs from 'fs';

test("writeToJSONFile creates file", ()=> {
   const path = "./fileCreated.json";
   const data = "5";
   const promise = writeToJSONFile(path, data)
   //assert(typeof promise === "object" && typeof promise.then === "function");
   return promise.then((r) => {
      assert(fs.existsSync(path));
   });
})

test("readFromJSONFile correctly reads file", ()=> {
   const path = "./fileCreated.json";
   const promise = readFromJSONFile(path)
   assert(typeof promise === "object" && typeof promise.then === "function");
   return promise.then((r) => {
      assert(typeof r === "string")
      assert(r==="5")
      fs.unlinkSync(path)
      assert(!fs.existsSync(path));
   });
})

