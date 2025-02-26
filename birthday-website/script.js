// script.js
const wishes = document.querySelectorAll('.wish');
const nextButtons = document.querySelectorAll('.next-btn');
let currentWish = 0;

// Function to show the next wish
function showNextWish() {
  wishes[currentWish].classList.remove('active');
  currentWish = (currentWish + 1) % wishes.length;
  wishes[currentWish].classList.add('active');

  // Add fireworks effect for specific wishes
  if (currentWish === 2 || currentWish === 4) {
    const fireworks = document.createElement('div');
    fireworks.classList.add('fireworks');
    document.body.appendChild(fireworks);
    setTimeout(() => {
      fireworks.remove();
    }, 3000);
  }
}

// Add event listeners to buttons
nextButtons.forEach(button => {
  button.addEventListener('click', showNextWish);
});