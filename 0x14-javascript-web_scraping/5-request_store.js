#!/usr/bin/node

// import the module
const request = require('request');
const fs = require('fs');

// The first argument is the URL to request
const url = process.argv[2];

// The second argument the file path to store the body response
const storeFile = process.argv[3];

// Make an HTTP GET request to the specified URL
request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    // write response to file
    fs.writeFile(storeFile, body, 'utf-8', function (error, data) {
      if (error) {
        console.error(error);
      }
    });
  }
});
