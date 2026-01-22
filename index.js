const form = document.querySelector('.cta__form');
const emailInput = document.getElementById('email-input');
const warningMsg = document.querySelector('.js-warning');

form.addEventListener('submit', (e) => {
  const emailValue = emailInput.value.trim();
  
  if (!validateEmail(emailValue)) {
    e.preventDefault(); // Stop the form from submitting
    warningMsg.textContent = "Please check your email";
    emailInput.classList.add('cta__input--error'); // Add a red border via CSS
  } else {
    warningMsg.textContent = "";
    emailInput.classList.remove('cta__input--error');
    // Form will submit naturally here
  }
});

// Error state reset on input
emailInput.addEventListener('input', () => {
  if (emailInput.classList.contains('cta__input--error')) {
    warningMsg.textContent = "";
    emailInput.classList.remove('cta__input--error');
  }
});

// The "Secret Sauce" Regex for email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}