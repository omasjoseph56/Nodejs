var http= require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    console.log(q);
    fs.readFile('index.html', function(err, data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end('404 not found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        console.log("....Incoming Request: "+ req.url);
        res.end();
    });
    
}).listen(8181);