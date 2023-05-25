const axios = require("axios");

class Busquedas {
  historial = ["Santiago", "Madrir", "Tokyo"];

  constructor() {
    // TODO: Leer mi base de datos
  }

  get paramsMapBox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      proximity: "ip",
      language: "es",
    };
  }

  async ciudad(lugar = "") {
    try {
      // TODO: Petición HTTP
      console.log("Iniciando búsqueda: ", lugar);

      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapBox,
      });

      const resp = await instance.get();

      console.log(resp.data);
      return []; // Retornar las ciudades que coincida
    } catch (error) {
      return [];
    }
  }
}

module.exports = Busquedas;
