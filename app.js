
function getMovie() {
    let input = document.getElementById("movie-input").value;
    console.log(input);
    let api = "https://www.omdbapi.com/?apikey=548c228a&t=" + input;
    fetch(api).then(function(data) {
    return data.json()
    }).then(function(data) {
        document.querySelector('.out-container').style.display = 'flex';
        document.getElementById('name').innerText = data.Title;
        document.getElementById('actors').innerText = "Actors: "+data.Actors;
        document.getElementById('awards').innerText = "Awards: "+data.Awards;
        document.getElementById('director').innerText = "Director: "+data.Director;
        document.getElementById('genre').innerText = "Genre: "+data.Genre;
        document.getElementById('plot').innerText = "Plot: \n"+data.Plot;
        document.getElementById('pic').src = data.Poster;
    })
}
console.log("Linked")

