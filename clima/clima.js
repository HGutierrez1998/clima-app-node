const axios = require('axios');

const getClima = async (lat, lng) => {

   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=588d3f9c65f21bbb462aa640c64eb18c`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}