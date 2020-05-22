
const axios = require('axios');

const getLugarLatLng = async (dir) => {
    
    const encodeUrl = encodeURI(dir);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-key': '29d89b0a71msh407412affb517c1p1ce747jsn2668bcc849fd'}
    });
    
    
    const resp = await  instance.get();

    if ( resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para la busqueda ${ dir}`);
    }

    const data =resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
           

    return  {
        direccion,
        lat,
        lng
    }
}



module.exports = {
    getLugarLatLng
}