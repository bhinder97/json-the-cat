const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) =>{

    console.log('statusCode:', response && response.statusCode);
    if (err) {
      // console.log('error:', err);
      callback(err, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length !== 0) {
      callback(null, data[0].description);
    } else {
      callback(null, "Breed not found!");
    }
    
    
    // console.log(typeof data)
  });

};


module.exports = fetchBreedDescription;