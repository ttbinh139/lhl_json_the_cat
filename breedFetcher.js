const request = require('request');

const args = process.argv.slice(2);

let url = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;

const breedFetcher = function () {
  request(url, (error, response, body) => {
    if (error) {
      throw ('Something went wrong');
    }
    if (response && response.statusCode !== 200) {
      throw ('Something went wrong, statusCode: ', response.statusCode);
    }
    let data = JSON.parse(body);
    if (data[0] != undefined) {
      console.log("Data", data[0]);
    } else {
      console.log("Breed not found!");
    }
  });
};

breedFetcher();