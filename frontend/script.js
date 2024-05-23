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
async function getRandomGif() {
  try {
    const response = await fetch("http://localhost:3000/giphy/random", {
      mode: "cors",
    });
    const data = await response.json();
    const imageUrl = data.data.images.original.url;

    img.src = imageUrl;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}

// fetch searched gif
async function getQueryGif(query) {
  try {
    const response = await fetch(
      `http://localhost:3000/giphy/search?s=${query}`,
      { mode: "cors" }
    );
    const data = await response.json();
    const imageUrl = data.data.images.original.url;

    img.src = imageUrl;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}
