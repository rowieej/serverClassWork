//* Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.

var http = require('http');
var PORT1 = 7000;
var PORT2 = 7500;
var goodComments = ["alright!", "hi five!", "pound it!"];
var badComments = ["are you serious", "i can't deal with you", "you suck"];

for (i=0; i < goodComments.length + 1 ; i++ ){

}

//need two different functions to handle requests, one for each server
function handleRequestOne(request, response){
  response.end("You're cool!");
}

function handleRequestTwo(request, response){
  response.end("you smell bad");
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);


serverOne.listen(PORT1, function(){
  console.log("server listening on: http://localhost:&s", PORT1)
});

serverTwo.listen(PORT2, function(){
  console.log("server listening on: http://localhost:&s", PORT2)
});


// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// ** Bonus **
// * Generate the good / bad phrase randomly from a list of predefined phrases
// * Use the `twitter` package inside the response to also return a random tweet!