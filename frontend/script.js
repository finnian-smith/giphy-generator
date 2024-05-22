const img = document.querySelector("img");
const randomButton = document.querySelector(".random-gif-button");
const form = document.querySelector("form");

// event listener for random on load
document.addEventListener("DOMContentLoaded", getRandomGif);

// event listener for random gif
randomButton.addEventListener("click", getRandomGif);

// event listener for search
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const query = formData.get("keyword");

  getQueryGif(query);

  form.reset();
});

// fetches random gif
function getRandomGif() {
  fetch("http://localhost:3000/giphy/random", { mode: "cors" })
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.data.images.original.url;

      img.src = imageUrl;
    })
    .catch((error) => {
      console.error("Error fetching image:", error);
    });
}

// fetch searched gif
function getQueryGif(query) {
  fetch(`http://localhost:3000/giphy/search?s=${query}`, { mode: "cors" })
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.data.images.original.url;

      img.src = imageUrl;
    })
    .catch((error) => {
      console.error("Error fetching image:", error);
    });
}
