var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('existing-iframe-example', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
    });
  }
  function onPlayerReady(event) {
    document.getElementById('existing-iframe-example').style.borderColor = '#FF6D00';
  }
  function changeBorderColor(playerStatus) {
    var color;
    if (playerStatus == -1) {
      color = "#37474F"; // unstarted = gray
    } else if (playerStatus == 0) {
      color = "#FFFF00"; // ended = yellow
    } else if (playerStatus == 1) {
      color = "#33691E"; // playing = green
    } else if (playerStatus == 2) {
      color = "#DD2C00"; // paused = red
    } else if (playerStatus == 3) {
      color = "#AA00FF"; // buffering = purple
    } else if (playerStatus == 5) {
      color = "#FF6DOO"; // video cued = orange
    }
    if (color) {
      document.getElementById('existing-iframe-example').style.borderColor = color;
    }
  }
  function onPlayerStateChange(event) {
    changeBorderColor(event.data);
  }




  

  var omdb = 'http://www.omdbapi.com/?apikey=922eaf8d&t=';
var randomMovie = randomize;


var action = [ "bullet+train", "top++gun", "avatar", "Rogue+One%3A+A+Star+Wars+Story", "the+batman", "dune", "Spider-Man%3A+No+Way+Home", "the+dark+knight", "Inception", "Kantara " ];
var horror = ["Bhediya", "last+night+in+soho", "it", "the+shinning", "prey", "the+black+phone", "Pearl", "a+quiet+place", "bird+box", "train+to+busan"];
var mystery = ["knives+out", "sita+ramam", "se7en", "blade+runner+2049", "Prisoners", "shutter+island", "Zootopia", "gone+girl", "death+on+the+nile" ,"Enola+Holmes"];
var comedy = ["Amsterdam", "once+upon+a+time+in+Hollywood", "Everything+Everywhere+All+at+Once", "deadpool", "superbad", "We're+the+Millers", "the+mask", "21+jump+street", "bros", "the+hangover"];
var movie = [""];



var randomize = action[i]

//console.log (randomize);



fetch(omdb + randomMovie)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)
  //Loop over the data to generate a table, each table row will have a link to the repo url
  
});