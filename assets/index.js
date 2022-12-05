
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