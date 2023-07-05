// Get all the FAQ elements
const faqItems = document.querySelectorAll('.faq');

// Attach click event listeners to each FAQ item
faqItems.forEach((item) => {
  const question = item.querySelector('.question');
  const answer = item.querySelector('.answer');

  // Toggle the visibility of the answer on click
  question.addEventListener('click', () => {
    answer.classList.toggle('show');
  });
});

// Footer Year
const currentYear = new Date().getFullYear();
    document.getElementById("footer-year").innerText = currentYear;
    