const form = document.querySelector('.cta__form');
const emailInput = document.getElementById('email-input');
const warningMsg = document.querySelector('.js-warning');

form.addEventListener('submit', (e) => {
  const emailValue = emailInput.value.trim();

  if (!validateEmail(emailValue)) {
    e.preventDefault(); // Stop the form from submitting
    warningMsg.textContent = "Error, please check your email";
    emailInput.classList.add('js-warning');
  } else {
    warningMsg.textContent = "";
    emailInput.classList.remove('js-warning');
    // Form will submit naturally here
  }
});

// Error state reset on input
emailInput.addEventListener('input', () => {
  if (emailInput.classList.contains('js-warning')) {
    warningMsg.textContent = "";
    emailInput.classList.remove('js-warning');
  }
});

// The "Secret Sauce" Regex for email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}