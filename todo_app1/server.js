

let express = require('express')
let app = express()
let mongodb = require('mongodb')
let sanitizeHTML = require('sanitize-html')
let connectionString = 'mongodb+srv://todoAppUser:Asdf12@cluster0-umlek.mongodb.net/todoApp?retryWrites=true&w=majority'
// going to add our mongoDB atlas string above need to retrieve from mongodb account. 
let db; // global variable for our client

app.use(express.static("public"))

mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    db = client.db()
    app.listen(3000)
})


app.use(express.json())   // now we want it to be asyncronix req
app.use(express.urlencoded({ extended: false })) //this is telling the express that 
//uses the req.body object to the server

function passwordProtected(req, res, next) {
  res.set('WWW-Authenticate', 'Basic realm="simple TodoApp"')
  console.log(req.headers.authorization)
  if(req.headers.authorization == "Basic ZGF2aWQ6YXNkZg=="){
    next()
  } else {
    res.status(401).send("Authentication required")
  }
}



app.use(passwordProtected)


app.get('/', passwordProtected, function (req, res) {
    db.collection('item').find().toArray(function (err, item) {
        res.send(`<!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple To-Do App</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    </head>
    <body>
      <div class="container">
        <h1 class="display-4 text-center py-1">To-Do App!!</h1>
        
        <div class="jumbotron p-3 shadow-sm">
          <form id="create-form" action="/create-item" method="POST">
            <div class="d-flex align-items-center">
              <input id="create-field"  name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
              <button class="btn btn-primary">Add New Item</button>
            </div>
          </form>
        </div>
        
        <ul id="item-list"  class="list-group pb-5">
        </ul>
        
      </div>

      <script> 
      let item= ${JSON.stringify(item)}
      </script>

      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src ="/browser.js"> </script> 
      
    </body>
    </html>`)
    })

})

app.post('/create-item', function(req, res) {
  let safeText = sanitizeHTML(req.body.text, {allowedTags: [], allowedAttributes: {}})
  db.collection('item').insertOne({text: safeText}, function(err, info) {
    res.json(info.ops[0])
  })
})


/* this going to allow the user to update the edit, grab the data from the database and update the data.  */
app.post('/update-item', function(req, res){
  let safeText = sanitizeHTML(req.body.text, {allowedTags: [], allowedAttributes: {}})
    db.collection('item').findOneAndUpdate({_id: new mongodb.ObjectId(req.body.id)}, {$set:{text: safeText}},function(){
        res.send("sucess")

    })
})


app.post('/delete-item', function(req, res) {
  db.collection('item').deleteOne({_id: new mongodb.ObjectId(req.body.id)}, function() {
    res.send("Success")
  })
})



  



























