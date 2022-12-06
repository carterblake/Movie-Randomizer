
//let embedLink2 = "https://www.youtube.com/embed/m2Pa9j88fT0";


// https://www.googleapis.com/youtube/v3/videos?part=player&id=jNQXAC9IVRw&key=AIzaSyC2LHjfmcNbjN6CVNmSF9Qrx1N_ngrWLzo
function log() {
  console.log("clicked 😋");
}
var search = "whiplash";
var key = "AIzaSyC2LHjfmcNbjN6CVNmSF9Qrx1N_ngrWLzo";
var searchUrl = "https://www.googleapis.com/youtube/v3/search?key=" + key + "&videoEmbeddable=true&type=video&part=snippet&maxResults=1" + "&q=" + search + " movie trailer";
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

  var omdb = 'http://www.omdbapi.com/?apikey=922eaf8d&t=';
  var actionButton = $("#action");
  var ButtonHorror = $("#horror");
  var ButtonMystery = $("#mystery");
  var ButtonComedy = $("#comedy");
  
  var action = [ "bullet+train", "top++gun", "avatar", "Rogue+One%3A+A+Star+Wars+Story", "the+batman", "dune", "Spider-Man%3A+No+Way+Home", "the+dark+knight", "Inception", "Kantara " ];
  var horror = ["Bhediya", "last+night+in+soho", "it", "the+shinning", "prey", "the+black+phone", "Pearl", "a+quiet+place", "bird+box", "train+to+busan"];
  var mystery = ["knives+out", "sita+ramam", "se7en", "blade+runner+2049", "Prisoners", "shutter+island", "Zootopia", "gone+girl", "death+on+the+nile" ,"Enola+Holmes"];
  var comedy = ["Amsterdam", "once+upon+a+time+in+Hollywood", "Everything+Everywhere+All+at+Once", "deadpool", "superbad", "We're+the+Millers", "the+mask", "21+jump+street", "bros", "the+hangover"];

  //ar randomMovie = randomize();


  //click action button
  //store one random action movie from action array
  //run OMDB fetch promise
  //fetch promise will append everything into page



actionButton.click(randomActionMovie);

function randomActionMovie() {

  var randomMovie = action[Math.floor(Math.random() * action.length)];

fetch(omdb + randomMovie)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)
 
  
});

}
