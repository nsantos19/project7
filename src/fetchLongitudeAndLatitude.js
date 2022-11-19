export function fetchLongitudeAndLatitude(query) {
  const searchUrl = new URL("https://geocode.maps.co/search");
  searchUrl.searchParams.append("q", query);
  return fetch(searchUrl)
  .then(response=>response.json())
  .then(data => Array.isArray(data)&& data.length > 0
    ? Promise.resolve(data[0]) : Promise.reject(new Error("No results found for query")))
  .then(obj =>{ return {"lon" : Number(obj.lon), "lat": Number(obj.lon)}})
  .catch(err => console.log("Unable to getth coordination with :" + err));
  // fetch(`https://geocode.maps.co/search?q=${query}$`)
}
