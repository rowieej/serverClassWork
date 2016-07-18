//lets require/import the HTTP module
var http = require('http');

//lets define a port we want to listen to
var PORT=8080;

//we need a function which handles requests and send response
function handleRequest(request, response){
  response.end('It Works!! Path Hit: ' + request.url);
}

//create a server
var server = http.createServer(handleRequest);

//lets start our server
server.listen(PORT, function(){
    //callback triggered when server is succesfully listening. hurray!
    console.log("server listening on: http://localhost:&s", PORT);
})