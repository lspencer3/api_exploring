
var axios = require("axios");
var keys = require("./keys.js");
var fs = require('fs');


//variable for omdb key
var omdbKey= keys.omdb.key

var request = require("request");


// Routes
module.exports = function (app){

  app.get("/search-movie", function(req,res){

    //console.log('hello')
    console.log(req.query.query)

    omdbIt(req.query.query)
        
    })
};


//function for running omdb search
function omdbIt(_param) {
  request("http://www.omdbapi.com/?t="+_param+"&y=&plot=short&apikey="+omdbKey, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      console.log('\n'+"Title: " + JSON.parse(body).Title+'\n');
      console.log("Year: "+JSON.parse(body).Year+'\n');
      console.log("IMDB Rating: "+JSON.parse(body).imdbRating+'\n');
      console.log("Rotten Tomatos Rating: "+JSON.parse(body).Ratings[1].Value+'\n');
      console.log("Country: "+JSON.parse(body).Country+'\n');
      console.log("Languages: "+JSON.parse(body).Language+'\n');
      console.log("Plot: "+JSON.parse(body).Plot+'\n');
      console.log("Actors: "+JSON.parse(body).Actors+'\n');
      fs.appendFile("log.txt", "OMBD_IT: " + _param+"\n")
      fs.appendFile("log.txt",'\n'+"Title: " + JSON.parse(body).Title+'\n' )
      fs.appendFile("log.txt","Year: "+JSON.parse(body).Year+'\n')
      fs.appendFile("log.txt","IMDB Rating: "+JSON.parse(body).imdbRating+'\n')
      fs.appendFile("log.txt","Rotten Tomatos Rating: "+JSON.parse(body).Ratings[1].Value+'\n')
      fs.appendFile("log.txt","Country: "+JSON.parse(body).Country+'\n')
      fs.appendFile("log.txt","Languages: "+JSON.parse(body).Language+'\n')
      fs.appendFile("log.txt","Plot: "+JSON.parse(body).Plot+'\n')
      fs.appendFile("log.txt","Actors: "+JSON.parse(body).Actors+'\n')
    }
    else {
      console.log(err);
    }
  });
};

