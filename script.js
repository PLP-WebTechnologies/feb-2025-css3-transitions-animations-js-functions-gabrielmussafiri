const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

// Check if animation preference is stored
if (localStorage.getItem("animationEnabled") === "false") {
  box.style.transition = "none"; // Disable animations
}

// Toggle animation on button click
animateBtn.addEventListener("click", () => {
  // Check if animation is enabled in localStorage
  const isAnimationEnabled =
    localStorage.getItem("animationEnabled") !== "false";

  // Toggle the box animation class
  if (isAnimationEnabled) {
    box.classList.toggle("animate");
  }

  // Toggle animation preference and store it in localStorage
  const newPreference = isAnimationEnabled ? "false" : "true";
  localStorage.setItem("animationEnabled", newPreference);
});
