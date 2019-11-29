/* 
what is a express? a bunch of pre-written javascript code that helps us leverage webservers. 
the good thing about express it's unopinionated and minimalist. 
express is the industry standard with node.js

so how do we install express? we go to the file in terminal and enter: 
npm install express

you can't download express from the website. 

what is npm ? node package manager is a pre-written code written in javascript or packages. 


*/

/* 

how install express package. go to terminal then the folder you want the node_modules to be installed into

then on terminal enter: 

npm install express then hit enter
it should install the node package and you will see a file on editor name node_modules

troubleshoot note: if you don't see the file package enter the following in command line: 
    npm init -y then enter

then reinstall npm install express. this should fix the issue and should see the package now. 

*/


/* 
to leverage express we need to import the file
let express = require("express")
*/


let express = require("express")
let ourApp = express() 

/*  .use is boilerplate code and you must use when you want the skyColor to be added 
to the body object to the req  */
ourApp.use(express.urlencoded({
    extended: false
}))

/* to tell our server what to do first arugument tell what url to be on the look out for
second argement: is a function that going to run base on the req the url takes in. so base on the
first argument / user input the second arguement will run. 
*/

ourApp.get('/', function(req, res){
/* what we want to do is send back html a little html 
 */ 

 /* action attribute. is where the form is sent to*/
 res.send(`
 <form action="/answer" method="POST"> 
    <p> what color is the sky on a clear and sunnyday</p>
    <input name= "skyColor" autocomplete="off"> 
    <button> Submit answer </button>
 </form>
 `)
})


/*  we are creating a post request to give a response base on the get request 
so we going to send a the user a reponse what happens when the user post
*/

/* to now when we summit the data on the input filled we will get a response call thank 
you for submitting the form. */

ourApp.post('/answer', function(req, res){
   if(req.body.skyColor === "blue"){
    res.send(`<p>
    Congrats, that is the correct answer!
    </p> 
    <a href="/"> Back to homepage</a> 
    `)
   } else {
    res.send(`<p>
    Sorry, that is inccrect.
    </p>
    <a href="/"> Back to homepage</a>`
    )
   }
})

/* to further illustrate the difference. we can see we wrote anther 
get request. if we mannually type httplocalhost:3000/answer we will get a response are you
lost  

*/

ourApp.get('/answer', function(req, res){
    res.send("are you lost")
})


ourApp.listen(3000)




