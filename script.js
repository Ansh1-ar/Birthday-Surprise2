// script.js
const wishes = document.querySelectorAll('.wish');
const nextButtons = document.querySelectorAll('.next-btn');
let currentWish = 0;

// Function to show the next wish
function showNextWish() {
  wishes[currentWish].classList.remove('active');
  currentWish = (currentWish + 1) % wishes.length;
  wishes[currentWish].classList.add('active');
}

// Add event listeners to buttons
nextButtons.forEach(button => {
  button.addEventListener('click', showNextWish);
});

// Play background music
const backgroundMusic = document.getElementById('background-music');

// Ensure the music plays automatically (some browsers block autoplay)
document.addEventListener('click', () => {
  backgroundMusic.play();
});

// Optional: Start playing music when the page loads
window.onload = () => {
  backgroundMusic.play();
};
