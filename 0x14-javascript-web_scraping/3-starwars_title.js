#!/usr/bin/node

// import the module request
const request = require('request');

// The first argument is the movie ID
const movieId = process.argv[2];

// Construct the API URL with the provided movie ID
const starWars = 'https://swapi-api.alx-tools.com/api/films/' + movieId;

// Make an HTTP GET request to the API
request(starWars, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const content = JSON.parse(body);
    console.log(content.title);
  }
});
