import axios from "axios";


export default {

  	getMovie: function(query) {

    	return axios({
		  	method: 'get',
		  	url: '/search-movie',
		  	params: { moviename: query }
		});
  	},

  	getSong: function(query) {
  		
    	return axios({
	  		method: 'get',
	  		url: '/search-songs',
	  		params: { songname: query }
 		});
  	}
}