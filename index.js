const app = require("express")()
const express = require("express")
const request = require('request');
const fetch = require("node-fetch");
const port = process.env.PORT || 3000
var http = require('http').createServer(app)

app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static("public"))

app.get('/', function (req, res) {
  //fetch movie data from OMDB api using api key and imdbID
  fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=3739d76`)
    .then(response => {
      return response.json();
    })

    .then(data => {
      //render homepage with movie data from api fetch
      res.render("home", {
        movieInfo: data
      })
      console.log(data)
    })
    .catch(err => {
      console.log(err);
    });

});

http.listen(port, function () {
  console.log(`Application started on port: ${port}`)
})

//imdbID for the fast and the furious 2001
var imdbID = "tt0232500"