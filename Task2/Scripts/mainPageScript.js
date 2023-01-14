// apiKey = 9813ce01a72ca1bd2ae25f091898b1c7
// url = https://api.themoviedb.org/3
// path = /discover/movie?sort_by=popularity.desc

//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7
//https://image.tmdb.org/t/p/w500/

import { apiUrl, imgPath } from "./Vars.js";

$(document).ready(function() {
    getMovies(apiUrl);
});

function getMovies(url) {
    $.getJSON(url)
        .done((data) => {
            showMovie(data.results);
        })
        .fail((error) => {
            console.log(error);
        });
}

function showMovie(data) {
    $.each(data, function(i, movie) {
        const { title, poster_path, id } = movie;
        const movieElement = $('<div>', { class: 'movie' });
        movieElement.append(`
      <a href="./DetailsPage.html?id=${id}">
      <img src="${imgPath + poster_path}" alt="Move" />
        <h4 id="moveName">${title}</h4>
    </a>
    `);
        $(main).append(movieElement);
    });
}