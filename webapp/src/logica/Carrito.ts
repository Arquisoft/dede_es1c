
export function getCoordenadas(address: string) {
  const axios = require("axios");

  return axios
    .get(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      "Calle Dr. Francisco Grande-Covián, 33011 Oviedo, Asturias, España" +
        ".json?access_token=" + process.env.KEY
    )
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      return error;
    });
}

export const getCoordenadasDeAddress = async (address: string) => {
  let coords = await getCoordenadas(address);

  let lon = coords.features[0].geometry.coordinates[0];
  let lat = coords.features[0].geometry.coordinates[1];

  return lat -lon; 


}

export const getDist = async (coord: number) => {
  const almacen: number = 43.35513026876176 -(-5.851290035687373);
  //MAL
  var dist = Math.sqrt( Math.pow((almacen), 2) + Math.pow((coord), 2));
  return dist;
}

export const shipCost = async (address: string) => {
  const coor = await getCoordenadasDeAddress(address);
  let dist= await getDist( coor);
  let coste = Math.round(dist / 100)
  return dist
}
