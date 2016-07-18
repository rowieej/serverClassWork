//* Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.

var http = require('http');
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response){
  response.end('It Works!! Path Hit: ' + request.url);
}

var serverOne = http.createServer(handleRequest);
var serverTwo = http.createServer(handleRequest);

serverTwo.listen(PORT2, function(){
  console.log("Why did you do that?  That's bad! You're bad")
});

serverOne.listen(PORT1, function(){
  console.log("Way to be! You're awesome!")
});

// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// ** Bonus **
// * Generate the good / bad phrase randomly from a list of predefined phrases
// * Use the `twitter` package inside the response to also return a random tweet!