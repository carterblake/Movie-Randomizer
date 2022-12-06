//these bits change what video is being played
//let videoID1 = "9qoXa5_w3Gw";

//let embedLink2 = "https://www.youtube.com/embed/m2Pa9j88fT0";

document.getElementById('youtube-video-two').src= "";//"https://www.youtube.com/embed/9qoXa5_w3Gw";

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