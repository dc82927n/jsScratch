


/* 

we creating an annoymous function
req // short for request
res // response
// the two name can be anything. but those are conventions 

*/


let ourApp = http.createServer(function(req, res) {
    res.end("Hello, and welcome to our website.")

}); 

/* 
so this is say we have a server object and begining to listen. so basically when we have
a server request is asking ourApp 
*/
ourApp.listen()
