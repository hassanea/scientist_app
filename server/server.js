/* Tutorials: https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/ */

//const express = require('express');
//const bodyParser = require('body-parser');
//const cors = require('cors');
//const app = express();
//
//const sqlite3 = require('sqlite3').verbose();
// 
//// open the database
//let db = new sqlite3.Database('./scientist_db.sqlite3', sqlite3.OPEN_READWRITE, (err) => {
//  if (err) {
//    console.error(err.message);
//  }
//  console.log('Connected to the Scientists database.');
//});
//
//
//
// 
//db.serialize(() => {
//  db.each(`SELECT * FROM scientists`, (err, row) => {
//    if (err) {
//      console.error(err.message);
//    }
//    console.log(row.id + "\t" + row.name);
//  });
//});
// 
//db.close((err) => {
//  if (err) {
//    console.error(err.message);
//  }
//  console.log('Close the database connection.');
//});