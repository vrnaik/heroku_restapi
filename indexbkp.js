//---------------------
const fs = require( 'fs');
//----------------------
//const path = require( 'path');
const { promisify } = require('util');


const readFile = promisify(fs.readFile);
//const filename = path.resolve('./data', 'Contact_Data.csv');


async function csvtojson( filename){
    try {
        const file = await readFile(filename, 'utf8');
        const lines = file.split('\n');
        lines.forEach((line, index) => {
        console.log(index, line);
        });
    
    }catch(e){
    console.log(e);
    }
}

module.exports =  csvtojson ;