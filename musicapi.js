//function for running spotify 
function spotifyIt(_param) {
  spotify.search({ type: 'track', query: _param, limit: 2 }, function(err, data) {
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

var mongoose = require("mongoose");
var axios = require("axios");

// Routes
module.exports = function (app){

axios.get('/search-songs', (req, resp) => {
  console.log(req.body)
}).then(function(resp){
  console.log(resp)

})

};