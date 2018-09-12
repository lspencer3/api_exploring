import axios from "axios";


export default {

  	getMovie: function(query) {
  		//console.log(query)

    	return axios({
		  	method: 'get',
		  	url: '/search-movie',
		  	params: { query: query }
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