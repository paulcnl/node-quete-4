// server.js
import "dotenv/config"; // this line is mandatory when you want to read variables from the '.env' file 
console.log(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY} and I love ${process.env.MY_LANGUAGE}`);