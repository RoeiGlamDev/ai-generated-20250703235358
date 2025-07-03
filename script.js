// Restaurant Website Script
// =========================
// A script to add interactivity to the website.

// Select all elements with the class "fade-in"
const fadeInElements = document.querySelectorAll('.fade-in');

// Add event listener to window scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Loop through all fade-in elements
  fadeInElements.forEach((element) => {
    // Get the element's offset top position
    const offsetTop = element.offsetTop;

    // Check if the element is in view
    if (scrollPosition >= offsetTop - window.innerHeight + 100) {
      // Add the "smooth-transition" class to the element
      element.classList.add('smooth-transition');

      // Add the "fade-in" animation to the element
      element.classList.add('fade-in');
    }
  });
});

// Select all buttons with the class "smooth-transition"
const smoothTransitionButtons = document.querySelectorAll('.smooth-transition');

// Add event listener to button click event
smoothTransitionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Add the "smooth-transition" class to the button
    button.classList.add('smooth-transition');
  });
});

// Error handling
try {
  // Code to execute
} catch (error) {
  console.error('Error:', error);
}