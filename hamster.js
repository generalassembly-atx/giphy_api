var request = require('request');
var open = require('open');

// 1. Find the correct URL to get adorable hamsters from Giphy!
request('http://api.giphy.com/v1/stickers/search?q=hamster&api_key=dc6zaTOxFJmzC', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var responseObject = JSON.parse(body);
    console.log(responseObject);

    var dataArray = responseObject.data;


    // 3. Use the `map()` function to iterate through the `dataArray` array. For each `gifObject` in `dataArray`, return the GIF URL.
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
