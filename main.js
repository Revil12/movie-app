document.getElementById("abutton").addEventListener("click", fetchMovieData);

async function fetchMovieData() {
    const apiKey = "ef3da836";
    const movieName = document.getElementById("movieName").value;
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayMovieInfo(data);
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
}

function displayMovieInfo(data) {
    const movieInfoContainer = document.getElementById("movieInfo");
    movieInfoContainer.innerHTML = `
        <h2  style="color: blueviolet;">${data.Title}</h2>
        <p style="color: goldenrod;">IMDb Rating: ${data.imdbRating}</p>
        <p>Director: ${data.Director}</p>
        <p>Actors: ${data.Actors}</p>
        <p style="color: silver;">Plot: ${data.Plot}</p>
        <img src="${data.Poster}" alt="${data.Title} Poster">
        <p>Data provided by <a href="http://www.omdbapi.com/">OMDb API</a></p>
    `;
}


    