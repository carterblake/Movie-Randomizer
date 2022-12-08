
//carter's key AIzaSyC2LHjfmcNbjN6CVNmSF9Qrx1N_ngrWLzo
//angel's key AIzaSyAoyGdSXvVOWV01Ek4ruf9qBMAbkXiYR1Y
//carrie's key AIzaSyDE_pcD00g-udy0VuO9nbCX2hI4POdh0oA


function getYoutubeVid(movie) {
  //var search = "Bullettrain";
  var key = "AIzaSyC2LHjfmcNbjN6CVNmSF9Qrx1N_ngrWLzo";
  var searchUrl = "https://www.googleapis.com/youtube/v3/search?key=" + key + "&videoEmbeddable=true&type=video&part=snippet&maxResults=1" + "&q=" + movie + " movie trailer";
  console.log(searchUrl);
  
  fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
  .then(function (data) {
    var theVid = data.items[0].id.videoId;
    console.log(theVid);
    document.getElementById('youtube-video-one').src= "https://www.youtube.com/embed/" + theVid;
  })
}


 
  var omdb = 'http://www.omdbapi.com/?apikey=922eaf8d&t=';

  var actionButton = $("#action");
  var horrorButton = $("#horror");
  var mysteryButton = $("#mystery");
  var comedyButton = $("#comedy");

  var movieInfo = $("#movieInfo");

  //list of moives to pick from
  var action = [ "bullet+train", "top++gun", "avatar", "Rogue+One%3A+A+Star+Wars+Story", "the+batman", "dune", "Spider-Man%3A+No+Way+Home", "the+dark+knight", "Inception", "Kantara " ];
  var horror = ["Bhediya", "last+night+in+soho", "it", "the+shinning", "prey", "the+black+phone", "Pearl", "a+quiet+place", "bird+box", "train+to+busan"];
  var mystery = ["knives+out", "sita+ramam", "se7en", "blade+runner+2049", "Prisoners", "shutter+island", "Zootopia", "gone+girl", "death+on+the+nile" ,"Enola+Holmes"];
  var comedy = ["Amsterdam", "once+upon+a+time+in+Hollywood", "Everything+Everywhere+All+at+Once", "deadpool", "superbad", "We're+the+Millers", "the+mask", "21+jump+street", "bros", "the+hangover"];

  
//on button click do the 

actionButton.click(randomActionMovie);
horrorButton.click(randomHorrorMovie);
mysteryButton.click(randomMysteryMovie);
comedyButton.click(randomComedyMovie);



function randomActionMovie() {

  var randomMovie = action[Math.floor(Math.random() * action.length)];

  getYoutubeVid(randomMovie);
  //youtube api function
fetch(omdb + randomMovie)
.then(function (response) {
  return response.json();
  
  

})
.then(function (data) {
  console.log(data)

  var title = document.createElement("h1");
  var year= document.createElement('h1');
  var rated = document.createElement('h1');
  var rottenScore = document.createElement('h1');
  var plot = document.createElement('h1');
  
  title.textContent = data.Title;
  year.textContent = data.Year + " year released";
  rated.textContent = data.Rated;
  rottenScore.textContent = "rotten tomatoes score of " + data.Ratings[1].Value ;
  plot.textContent = data.Plot;
 
  movieInfo.append(title);
  movieInfo.append(rated);
  movieInfo.append(year);
  movieInfo.append(rottenScore);
  movieInfo.append(plot);
});

}

function randomHorrorMovie() {

  var randomMovie = horror[Math.floor(Math.random() * action.length)];
  getYoutubeVid(randomMovie);
fetch(omdb + randomMovie)
.then(function (response) {
  return response.json();
  //youtube api function

})
.then(function (data) {
  console.log(data)

  var title = document.createElement("h1");
  var year= document.createElement('h1');
  var rated = document.createElement('h1');
  var rottenScore = document.createElement('h1');
  var plot = document.createElement('h1');
  
  title.textContent = data.Title;
  year.textContent = data.Year + " year released";
  rated.textContent = data.Rated;
  rottenScore.textContent = "rotten tomatoes score of " + data.Ratings[1].Value ;
  plot.textContent = data.Plot;
 
  movieInfo.append(title);
  movieInfo.append(rated);
  movieInfo.append(year);
  movieInfo.append(rottenScore);
  movieInfo.append(plot);
});

}

function randomMysteryMovie() {

  var randomMovie = mystery[Math.floor(Math.random() * action.length)];
  getYoutubeVid(randomMovie);
fetch(omdb + randomMovie)
.then(function (response) {
  return response.json();
  //youtube api function

})
.then(function (data) {
  console.log(data)

  var title = document.createElement("h1");
  var year= document.createElement('h1');
  var rated = document.createElement('h1');
  var rottenScore = document.createElement('h1');
  var plot = document.createElement('h1');
  
  title.textContent = data.Title;
  year.textContent = data.Year + " year released";
  rated.textContent = data.Rated;
  rottenScore.textContent = "rotten tomatoes score of " + data.Ratings[1].Value ;
  plot.textContent = data.Plot;
 
  movieInfo.append(title);
  movieInfo.append(rated);
  movieInfo.append(year);
  movieInfo.append(rottenScore);
  movieInfo.append(plot);
});

}


function randomComedyMovie() {

  var randomMovie = comedy[Math.floor(Math.random() * action.length)];
  getYoutubeVid(randomMovie);
fetch(omdb + randomMovie)
.then(function (response) {
  return response.json();
  //youtube api function

})
.then(function (data) {
  console.log(data)

  var title = document.createElement("h1");
  var year= document.createElement('h1');
  var rated = document.createElement('h1');
  var rottenScore = document.createElement('h1');
  var plot = document.createElement('h1');
  
  title.textContent = data.Title;
  year.textContent = data.Year + " year released";
  rated.textContent = data.Rated;
  rottenScore.textContent = "rotten tomatoes score of " + data.Ratings[1].Value ;
  plot.textContent = data.Plot;
 
  movieInfo.append(title);
  movieInfo.append(rated);
  movieInfo.append(year);
  movieInfo.append(rottenScore);
  movieInfo.append(plot);
});

}


