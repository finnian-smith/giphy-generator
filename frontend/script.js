const img = document.querySelector("img");

fetch("http://localhost:3000/giphy?s=dogs", { mode: "cors" })
  .then((response) => response.json())
  .then((data) => {
    const imageUrl = data.data.images.original.url;

    img.src = imageUrl;
  })
  .catch((error) => {
    console.error("Error fetching image:", error);
  });
