const img = document.querySelector("img");

// random gif
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/giphy/random", { mode: "cors" })
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.data.images.original.url;

      img.src = imageUrl;
    })
    .catch((error) => {
      console.error("Error fetching image:", error);
    });
});
