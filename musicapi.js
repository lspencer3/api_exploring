//function for running spotify 


var axios = require("axios");
var keys = require("./keys.js");
var fs = require('fs');
var Spotify = require("node-spotify-api");



//variable for omdb key
var spotify = new Spotify(keys.spotifyKeys);
var request = require("request");


// Routes
module.exports = function (app){

  app.get("/search-songs", function(req,res){
    function spotifyIt(_param) {
      spotify.search({ type: 'track', query: _param, limit: 5 }, function(err, data) {
        if (err) {
          console.log('Error occurred: ' + err);
        }
        else if (!err) {
          fs.appendFile("log.txt", command+": " + param+"\n")
          for (var i =0; i <data.tracks.items[0].album.artists.length; i ++){
            console.log('\n'+"Artists: "+JSON.stringify(data.tracks.items[0].album.artists[i].name)+'\n')
            fs.appendFile("log.txt",'\n'+"Artists: "+JSON.stringify(data.tracks.items[0].album.artists[i].name)+'\n')
          }
          console.log("Track Name: "+JSON.stringify(data.tracks.items[0].name)+'\n')
          console.log("Preview Link: "+JSON.stringify(data.tracks.items[0].preview_url)+'\n')
          console.log("Album Name: "+JSON.stringify(data.tracks.items[0].album.name)+'\n')
          fs.appendFile("log.txt","Track Name: "+JSON.stringify(data.tracks.items[0].name)+'\n')
          fs.appendFile("log.txt","Preview Link: "+JSON.stringify(data.tracks.items[0].preview_url)+'\n')
          fs.appendFile("log.txt","Album Name: "+JSON.stringify(data.tracks.items[0].album.name)+'\n')
        }
      });
    };
    console.log(req.query.songname)
    spotifyIt(req.query.songname)
    spotify.search({ type: 'track', query: req.query.songname, limit: 2 }, function(err, data) {
    console.log(data.tracks.items)
    res.send(data.tracks.items)
  })
  })
}  

