var request = require('request');
var open = require('open');

request('http://api.giphy.com/v1/gifs/search?q=adorable+hamsters&api_key=dc6zaTOxFJmzC', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var responseObject = JSON.parse(body);
    var dataArray = responseObject.data
     var urlArray = dataArray.map(function(gifObject){
        return gifObject.url
      })

      console.log(urlArray);


   openRandom(urlArray);
  }
})

function openRandom(array){
  var item = array[Math.floor(Math.random()*array.length)];
  open(item);
}
