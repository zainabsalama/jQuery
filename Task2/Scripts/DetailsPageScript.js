import { movieID, url, imgPath, movieDetailsData } from "./Vars.js";

function getMovie(id) {
    let movieUrl = `${url}/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`;
    $.ajax({
        url: movieUrl,
        method: "GET",
        success: function(data) {
            const { title, poster_path, overview } = data;
            const movieElement = $('<div>').addClass('container').html(`
                  <img src="${imgPath + poster_path}" alt="Move" />
                      <div>
                      <h3 id="moveName">${title}</h3>
                  <p>${overview}</p>
                  </div>
                  `);
            $(movieDetailsData).append(movieElement);
        }
    });
}

getMovie(movieID);



//the bad one
//DetailsPage
// movieID = location.search.split("=")[1];
// const movieDetailsData = document.getElementById("movieData");

//https://api.themoviedb.org/3/movie/436270?api_key=9813ce01a72ca1bd2ae25f091898b1c7

// url + "/movie/" + id +"?api_key=9813ce01a72ca1bd2ae25f091898b1c7"

// function getMoviesDetails(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       data.results.forEach((movie) => {
//         if (movie.id == movieID) {
//           const { title, poster_path, overview } = movie; //Distracting
//           const movieElement = document.createElement("div");
//           movieElement.classList.add("container");
//           movieElement.innerHTML = `
//               <img src="${imgPath + poster_path}" alt="Move" />
//                   <div>
//                   <h3 id="moveName">${title}</h3>
//               <p>${overview}</p>
//               </div>
//               `;
//           movieDetailsData.appendChild(movieElement);
//         }
//       });
//     });
// }

// getMoviesDetails(apiUrl);