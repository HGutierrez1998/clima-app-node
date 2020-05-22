
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener la data',
        demand: true
    }
})
.help()
.argv;





/*
clima.getClima(45.419998,-75.690002)
     .then(console.log)
     .catch(err => console.log(err));
*/
const getInfo = async (direccion) =>{

    try {
        const lugarData = await lugar.getLugarLatLng( direccion);
        const climaData = await clima.getClima( lugarData.lat, lugarData.lng);
    
        const direccionData = lugarData.direccion;
        const climaD = climaData;
        
        return {
            direccionData,
            climaD
        };
    } catch (error) {
        throw new Error(`No hay resultados para la busqueda ${ lugarData.direccion}`);
    }
    
}

getInfo(argv.direccion)
        .then( res =>{
            console.log(`El clima de ${res.direccionData} es de ${res.climaD}`);
        })
        .catch( err => {
          console.log(err);  
        })