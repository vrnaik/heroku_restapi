const csvtojson = require("./index.js");
const path = require( 'path');

const filename = path.resolve('./data', 'Contact_Data.csv');
csvtojson(filename);

console.log(module);