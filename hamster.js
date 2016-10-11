var request = require('request');
var open = require('open');

// 1. Find the correct URL to get adorable hamsters from Giphy!
request('http://api.giphy.com/v1/gifs/search?q=hamsters&api_key=dc6zaTOxFJmzC', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var responseObject = JSON.parse(body);
    console.log(responseObject);

    // 2. Set up an array variable `dataArray` that stores the array of GIF objects. HINT: You'll want to grab the value of the "data" key in the `responseObject` object.
     var dataArray = 

    // 3. Use the `map()` function to iterate through the `dataArray` array. For each `gifObject` in `dataArray`, return the GIF URL.
    // var urlArray = dataArray.map(function(gifObject){
    //   ???
    // })

    // 4. Log the `urlArray` to your console.
    // console.log(urlArray);

    // 5. Uncomment this once it works to open a random GIF in your browser!
    // openRandom(urlArray);
  }
})

function openRandom(array){
  var item = array[Math.floor(Math.random()*array.length)];
  open(item);
}
