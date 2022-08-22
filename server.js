const express = require('express'); //설치한 npm express 가져옴
const app = express();

const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');
});

//DB연결 
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'example.org',
  user     : 'bob',
  password : 'secret'
});

app.set('views', __dirname + '/views'); // dirname : 현재 디렉토리
app.set('view engine', 'ejs'); //npm ejs 사용 , html 안에서 javascript 사용가능
app.engine('html',require('ejs').renderFile);

app.get('/', function (req, res) { //router
    res.render('index.html');
});
  
app.get('/about', function (req, res) { //router
    res.render('About.html')
});

app.get('/db', function (req, res) { //router
    if (error) throw error;
    connection.connect();
    
    connection.query('SELECT * from test', function (error, results, fields) {

    res.send(JSON.stringify(results));
    console.log('results', results);
    });
    
    connection.end();
});
