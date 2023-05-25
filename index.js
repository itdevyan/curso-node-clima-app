require("dotenv").config();

const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
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
        const lugar = await leerInput("Ingresa el lugar que quieres buscar: ");

        // buscar lugar
        await busquedas.ciudad(lugar);

        // seleccionar el lugar

        // clima

        // mostrar resultados
        console.log("\nInformación de la ciudad\n".green);
        console.log("Ciudad: ");
        console.log("Lat: ");
        console.log("Lng: ");
        console.log("Temperatura: ");
        console.log("Mínima: ");
        console.log("Máxima: ");
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
