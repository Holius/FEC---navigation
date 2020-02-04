var express = require('express');
var app = express();
var path = require('path');
var port = 3000;
const bodyParser = require('body-parser');
var mysql = require('mysql');

//database
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'password',
//   database : 'searchbar'
// });

// connection.connect();

//middleware
app.use(express.static(path.join(__dirname, './dist')))
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/searchItems', (req,res) => {
    connection.query('SELECT * FROM search', function (error, results) {
        if (error) {
          res.status(404).send(error)
        };
        res.status(200).send(results);
      });
})

app.listen(port, () => console.log('port ' + port + ' is on'))