const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (response && response.statusCode !== 200) {
      callback(response.statusCode, null);
      //throw ('Something went wrong, statusCode: ', response.statusCode);
    }
    let data = JSON.parse(body);
    //console.log(data);
    if (data[0] == undefined) {
      callback(null, []);
    } else {
      // console.log(data[0].description);
      callback(null, data[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};