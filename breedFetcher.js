const request = require('request');

let args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (err, response, body) =>{

  console.log('statusCode:', response && response.statusCode);
  if (err) {
    console.log('error:', err);
    return;
  }
  const data = JSON.parse(body);
  if (data.length !== 0) {
    console.log('Description:', data[0].description);
  } else {
    console.log("Breed not found!");
  }
  
  
  // console.log(typeof data)
});