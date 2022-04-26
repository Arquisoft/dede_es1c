/* istanbul ignore next */
export function getCoordenadas(address: string) {
  const axios = require("axios");

  return axios
    .get(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      address +
        ".json?access_token=" + ""
    )
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      return error;
    });
}
/* istanbul ignore next */
export const getCoordenadasDeAddress = async (address: string) => {
  let coords = await getCoordenadas(address);

  let lat = coords.features[0].geometry.coordinates[1];
  let lon = coords.features[0].geometry.coordinates[0];
  const lon1 =  -5.851290035687373 * Math.PI / 180;
  const lonPOD = lon * Math.PI / 180;
  const lat1 = 43.35513026876176 * Math.PI / 180;
  const latPOD = lat * Math.PI / 180;

  // Haversine formula
  let dlon = lonPOD - lon1;
  let dlat = latPOD - lat1;
  let a = Math.pow(Math.sin(dlat / 2), 2)
           + Math.cos(lat1) * Math.cos(latPOD)
           * Math.pow(Math.sin(dlon / 2),2);
         
  let c = 2 * Math.asin(Math.sqrt(a));

  // Radius of earth in kilometers. Use 3956
  // for miles
  let r = 6371;

  // calculate the result
  return(c * r);



}
/* istanbul ignore next */
export const shipCost = async (address: string) => {
  if(address!==""){
  const dist = await getCoordenadasDeAddress(address);
  let additionalkm=1;
  let precioFijo=2;
  if(dist>=3){
    additionalkm=0.1 
  }
  let coste = (dist*additionalkm)+precioFijo
  return  Math.round(coste * 100) / 100}
  return 0;
}
