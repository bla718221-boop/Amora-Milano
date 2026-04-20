// Simple hover logging (can add cart logic here later)
document.querySelectorAll(".product").forEach(product => {
  product.addEventListener("mouseenter", () => {
    console.log("Hovering:", product.querySelector("h3").innerText);
  });
});
