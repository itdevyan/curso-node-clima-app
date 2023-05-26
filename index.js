require("dotenv").config();

const {
  inquirerMenu,
  pausa,
  leerInput,
  listarLugares,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  console.clear();

  let opt;
  const busquedas = new Busquedas();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        // mostra mensaje
        const termino = await leerInput(
          "Ingresa el lugar que quieres buscar: "
        );

        // buscar lugar
        const lugares = await busquedas.ciudad(termino);

        // seleccionar el lugar
        const idSeleccionado = await listarLugares(lugares);
        const lugarSeleccionado = lugares.find(
          (lugar) => lugar.id === idSeleccionado
        );

        // clima
        const clima = await busquedas.climaLugar(
          lugarSeleccionado.lat,
          lugarSeleccionado.lng
        );

        // mostrar resultados
        console.log("\nInformación de la ciudad\n".green);
        console.log("Ciudad: ", lugarSeleccionado.nombre);
        console.log("Lat: ", lugarSeleccionado.lat);
        console.log("Lng: ", lugarSeleccionado.lng);
        console.log("Temperatura: ", clima.temp);
        console.log("Mínima: ", clima.min);
        console.log("Máxima: ", clima.max);
        console.log("Como está el clima: ", clima.desc);
        break;
      case 2:
        break;
      default:
        break;
    }
    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
