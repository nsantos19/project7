import fetch from "node-fetch"
import path from "node:path"
import {URL} from "node:url"



export function fetchUniversities(query) {
  const searchURL = new URL("https://university-web-api.herokuapp.com/search")
  searchURL.searchParams.append("name",query);

  return fetch(searchURL.toString()).then( response => response.json()).then(json =>{
    let arr = []
    json.forEach(obj => "name" in obj ? arr.push(obj.name): false)
    return arr;
  })//.catch(err => console.log("unable to retrieve university data: " + err));
}
