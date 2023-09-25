const container = document.querySelector('.gallery');
let scrollAmount = 0;
const scrollSpeed = 1;
let isScrollingEnabled = true;

function scrollContainer() {
  if (isScrollingEnabled) {
    scrollAmount += scrollSpeed;
    container.scrollLeft = scrollAmount;

    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
      scrollAmount = 0;
    }
  }

  requestAnimationFrame(scrollContainer);
}

scrollContainer();

// Add an event listener to stop scrolling when the container is hovered over
container.addEventListener('mouseenter', () => {
  isScrollingEnabled = false;
});

// Add an event listener to resume scrolling when the mouse leaves the container
container.addEventListener('mouseleave', () => {
  isScrollingEnabled = true;
});




//................................................................................................................................




// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth' // Smooth scroll behavior
      });
    }
  });
});
