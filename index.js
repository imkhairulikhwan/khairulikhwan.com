var express = require('express')
var app = express()
var http = require('http');
var fs = require('fs');

const PORT=8080; 

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
/*
app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
*/

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    //}).listen(PORT);
	}).listen(app.get('port'));
});