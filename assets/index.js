
//carter's key AIzaSyC2LHjfmcNbjN6CVNmSF9Qrx1N_ngrWLzo
//angel's key AIzaSyAoyGdSXvVOWV01Ek4ruf9qBMAbkXiYR1Y
//carrie's key AIzaSyDE_pcD00g-udy0VuO9nbCX2hI4POdh0oA


function getYoutubeVid(randomMovie) {
  var key = "AIzaSyDE_pcD00g-udy0VuO9nbCX2hI4POdh0oA";
  var searchUrl = "https://www.googleapis.com/youtube/v3/search?key=" + key + "&videoEmbeddable=true&type=video&part=snippet&maxResults=1" + "&q=" + randomMovie + "+movie+trailer";
  
  fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
  .then(function (data) {
    var theVid = data.items[0].id.videoId;
    document.getElementById('youtube-video-one').src= "https://www.youtube.com/embed/" + theVid;
  })
}


 
  var omdb = 'https://www.omdbapi.com/?apikey=922eaf8d&t=';

  var actionButton = $("#action");
  var horrorButton = $("#horror");
  var mysteryButton = $("#mystery");
  var comedyButton = $("#comedy");
  var movieInfo = $("#movieInfo");

  //list of moives to pick from
  var action = [ "bullet+train", "top++gun", "avatar", "Rogue+One%3A+A+Star+Wars+Story", "the+batman", "dune", "Spider-Man%3A+No+Way+Home", "the+dark+knight", "Inception"];
  var horror = ["last+night+in+soho", "it", "prey", "the+black+phone", "Pearl", "a+quiet+place", "bird+box", "train+to+busan"];
  var mystery = ["knives+out", "se7en", "blade+runner+2049", "Prisoners", "Zootopia", "gone+girl", "death+on+the+nile" , "Enola+Holmes"];
  var comedy = ["Amsterdam", "once+upon+a+time+in+Hollywood", "Everything+Everywhere+All+at+Once", "deadpool", "superbad", "We're+the+Millers", "the+mask", "21+jump+street", "bros", "the+hangover"];

  
//event listeners for the four buttons

actionButton.click(randomActionMovie);
horrorButton.click(randomHorrorMovie);
mysteryButton.click(randomMysteryMovie);
comedyButton.click(randomComedyMovie);


//clear all h1 tags function 
function clearAll() {

var h1Tags = document.querySelectorAll("h1");
for (i = 0; i < h1Tags.length; i++) {
h1Tags[i].remove()
}

}


//----------------random action movie function ------------------------------------


  // getYoutubeVid(randomMovie);
 
function randomActionMovie() {
// clear all h1 one tags. 
  clearAll()
  //generates random movie from list
  var randomMovie = action[Math.floor(Math.random() * action.length)];
 
//youtube api function
 getYoutubeVid(randomMovie);
  
  //fetch request omdb api with random movie

fetch(omdb + randomMovie)
.then(function (response) {
  return response.json();
})
.then(function (data) {

  console.log(data)
  
  var title = document.createElement("h1");
  var year= document.createElement('h1');
  var rated = document.createElement("h1");
  var rottenScore = document.createElement('h1');
  var plot = document.createElement('h1');

  title.classList.add("card-header-title");
  year.classList.add("card-header-title");
  rated.classList.add("card-header-title");
  rottenScore.classList.add("card-header-title");
  plot.classList.add("card-header-title");

  
  title.textContent = data.Title;
  year.textContent = data.Year + " Year Released";
  rated.textContent = data.Rated;
  rottenScore.textContent = "Rotten Tomatoes Score: " + data.Ratings[1].Value ;
  plot.textContent = data.Plot;
 
  movieInfo.append(title);
  movieInfo.append(rated);
  movieInfo.append(year);
  movieInfo.append(rottenScore);
  movieInfo.append(plot);
  h1Tags.textContent = "";
});
}

//---------------------------------random horror movie function ------------------------------

function randomHorrorMovie() {
  clearAll()

  var randomMovie = horror[Math.floor(Math.random() * horror.length)];
   getYoutubeVid(randomMovie);

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

  title.classList.add("card-header-title");
  year.classList.add("card-header-title");
  rated.classList.add("card-header-title");
  rottenScore.classList.add("card-header-title");
  plot.classList.add("card-header-title");
  
  title.textContent = data.Title;
  year.textContent = data.Year + " Year Released";
  rated.textContent = data.Rated;
  rottenScore.textContent = "Rotten Tomatoes Score: " + data.Ratings[1].Value ;
  plot.textContent = data.Plot;
 
  movieInfo.append(title);
  movieInfo.append(rated);
  movieInfo.append(year);
  movieInfo.append(rottenScore);
  movieInfo.append(plot);
});

}

//--------------------------------random mystery movie function-------------------------------------

function randomMysteryMovie() {

  clearAll()

  var randomMovie = mystery[Math.floor(Math.random() * mystery.length)];
   getYoutubeVid(randomMovie);


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

  title.classList.add("card-header-title");
  year.classList.add("card-header-title");
  rated.classList.add("card-header-title");
  rottenScore.classList.add("card-header-title");
  plot.classList.add("card-header-title");
  
  title.textContent = data.Title;
  year.textContent = data.Year + " Year Released";
  rated.textContent = data.Rated;
  rottenScore.textContent = "Rotten Tomatoes Score: " + data.Ratings[1].Value ;
  plot.textContent = data.Plot;
 
  movieInfo.append(title);
  movieInfo.append(rated);
  movieInfo.append(year);
  movieInfo.append(rottenScore);
  movieInfo.append(plot);
});

}

//---------------------------------random comedy movie function -----------------------


function randomComedyMovie() {

  clearAll()

  var randomMovie = comedy[Math.floor(Math.random() * comedy.length)];
  getYoutubeVid(randomMovie);

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

  title.classList.add("card-header-title");
  year.classList.add("card-header-title");
  rated.classList.add("card-header-title");
  rottenScore.classList.add("card-header-title");
  plot.classList.add("card-header-title");
  
  title.textContent = data.Title;
  year.textContent = data.Year + " Year Released";
  rated.textContent = data.Rated;
  rottenScore.textContent = "Rotten Tomatoes Score: " + data.Ratings[1].Value ;
  plot.textContent = data.Plot;
 
  movieInfo.append(title);
  movieInfo.append(rated);
  movieInfo.append(year);
  movieInfo.append(rottenScore);
  movieInfo.append(plot);
});

}


