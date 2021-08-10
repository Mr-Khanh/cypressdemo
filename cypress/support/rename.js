const fs = require('fs');
let today = new Date();
let time = today.getFullYear() + "_" + (((today.getMonth()+1) < 10) ? ("0" + (today.getMonth()+1)) : (today.getMonth()+1) ) + "_" + ((today.getDate() < 10) ? ("0" + today.getDate()) : today.getDate()) + "-" + today.getHours() + "_" + today.getMinutes() + "_" + today.getSeconds();
let new_name = 'cypress/reports/mochareports/report_' + time + '.html';
fs.rename('cypress/reports/mochareports/report.html', new_name, function(err) { if (err) console.log(err); console.log('File successfully renamed!') });
fs.unlinkSync('cypress/reports/mochareports/report.json', function(err) { if (err) console.log(err); console.log('File is deleted!') });
