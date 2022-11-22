import fetch from 'node-fetch'


export function fetchLongitudeAndLatitude(query) {
  const searchUrl = new URL("https://geocode-cache.herokuapp.com/search");
  searchUrl.searchParams.append("q", query);
  return fetch(searchUrl)
  .then(response => response.ok? response : Promise.reject(new Error(response.statusText)))
  .then(response=>response.json(), response => new Error(response.statusText))

  .then(data => Array.isArray(data)&& data.length > 0
    ? Promise.resolve(data[0]) : Promise.reject(new Error("No results found for query")))
  .then(obj =>{ return {"lon" : Number(obj.lon), "lat": Number(obj.lat)}})
  //.catch(err => console.log("Unable to get coordination with :" + err));
  // fetch(`https://geocode.maps.co/search?q=${query}$`)
}
