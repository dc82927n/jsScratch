
/* we need to let node know we using one of it's method */

let http = require("http")

/* 

we creating an annoymous function
req // short for request
res // response
// the two name can be anything. but those are conventions 

*/


let ourApp = http.createServer(function(req, res) {
    if(req.url == "/"){
        res.end("Hello, and welcome to our website.")
    }
    if(req.url == "/about"){
        res.end("thank you for the interest in our webpage")
    }

    res.end("we can not find the page your looking for")

}); 

/* 
so this is say we have a server object and begining to listen. so basically when we have
a server request is asking ourApp 
*/
ourApp.listen(3000)
