document.addEventListener("DOMContentLoaded", () => {
  console.log("Site Plan loaded successfully!");

  const wireframes = document.querySelectorAll(".wireframe");
  wireframes.forEach(frame => {
    frame.addEventListener("click", () => {
      alert("This is a placeholder for the wireframe layout.");
    });
  });
});
