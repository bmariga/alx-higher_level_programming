#!/usr/bin/node

// import the module File System
const fs = require('fs');

// The first argument is the file path
const file = process.argv[2];

// The second argument is the string to write
const write = process.argv[3];

// write to file
fs.writeFile(file, write, 'utf-8', error => {
  if (error) {
    console.log(error);
  }
});
