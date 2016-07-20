var request = require('request');
var open = require('open');


// 1. Find the correct URL to get funny Bollywood GIFS
request('http://api.giphy.com/v1/gifs/search?q=funny+bollywood&api_key=dc6zaTOxFJmzC', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var response_hash = JSON.parse(body);
    //console.log(response_hash);

    // 2. Set up an array variable `data_array` that stores the array of GIF hashes. HINT: You'll want to grab the value of the "data" key in the `response_hash` object.
    var data_array = [];
    for (var i = 0; i < response_hash.data.length; i ++) {
      data_array.push(response_hash.data[i]);
    }

    // 3. Use the `map()` function to iterate through the `data_array` array. For each `gif_hash` in `data_array`, return the GIF URL.
    var url_array = data_array.map(function(gif_hash){
      for (var i = 0; i < data_array.length; i++) {
        return gif_hash.url;
      }
    })

    // 4. Log the `url_array` to your console.
    console.log(url_array);

    // 5. Uncomment this once it works to open a random GIF in your browser!
    openRandom(url_array);
  }
})

function openRandom(array){
  var item = array[Math.floor(Math.random()*array.length)];
  open(item);
}
