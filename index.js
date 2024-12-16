// Select form and inputs
const form = document.getElementById('signUpForm');
const userNameInput = document.getElementById('userName');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const streetInput = document.getElementById('st');
const genderInput = document.getElementById('gender');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Error message elements
const userNameError = document.getElementById('usernameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const genderError = document.getElementById('genderError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Form submission event listener
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  let isValid = true;

  // Validate Name (letters only)
  if (!/^[a-zA-Z\s]+$/.test(userNameInput.value.trim())) {
    userNameError.textContent = 'Name must contain letters only.';
    userNameInput.classList.add('error');
    isValid = false;
  } else {
    userNameError.textContent = '';
    userNameInput.classList.remove('error');
  }

  // Validate Phone (numbers only)
  if (!/^\d+$/.test(phoneInput.value.trim())) {
    phoneError.textContent = 'Phone number must contain numbers only.';
    phoneInput.classList.add('error');
    isValid = false;
  } else {
    phoneError.textContent = '';
    phoneInput.classList.remove('error');
  }

  // Validate Email (@gmail.com only)
  if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(emailInput.value.trim())) {
    emailError.textContent = 'Email must be a valid @gmail.com address.';
    emailInput.classList.add('error');
    isValid = false;
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('error');
  }

  // Validate City
  if (cityInput.value === '') {
    cityInput.classList.add('error');
    isValid = false;
  } else {
    cityInput.classList.remove('error');
  }

  // Validate State
  if (stateInput.value === '') {
    stateInput.classList.add('error');
    isValid = false;
  } else {
    stateInput.classList.remove('error');
  }

  // Validate Street
  if (streetInput.value.trim() === '') {
    streetInput.classList.add('error');
    isValid = false;
  } else {
    streetInput.classList.remove('error');
  }

  // Validate Gender
  if (genderInput.value === '') {
    genderError.textContent = 'Please select your gender.';
    genderInput.classList.add('error');
    isValid = false;
  } else {
    genderError.textContent = '';
    genderInput.classList.remove('error');
  }

  // Validate Password
  if (passwordInput.value.trim() === '') {
    passwordError.textContent = 'Please enter a password.';
    passwordInput.classList.add('error');
    isValid = false;
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove('error');
  }

  // Validate Confirm Password
  if (confirmPasswordInput.value.trim() === '') {
    confirmPasswordError.textContent = 'Please confirm your password.';
    confirmPasswordInput.classList.add('error');
    isValid = false;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
    confirmPasswordInput.classList.add('error');
    isValid = false;
  } else {
    confirmPasswordError.textContent = '';
    confirmPasswordInput.classList.remove('error');
  }

  // Final Validation
  if (isValid) {
    alert('Sign Up Confirmed');
  } else {
    alert('Sign Up Not Confirmed. Please check the form.');
  }
});

// Helper Function to Validate Email (specific to @gmail.com)
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return emailRegex.test(email);
}



















// set profaile
// Elements
const form = document.getElementById('profileForm');
const aboutField = document.getElementById('set_about');
const charCounter = document.getElementById('char_count');
const profilePicture = document.getElementById('set_picture');
const previewImage = document.getElementById('previewImage');
const submitBtn = document.getElementById('submitBtn');

// Character Counter for About Field
aboutField.addEventListener('input', () => {
    charCounter.textContent = `${aboutField.value.length}/500`;
});

// Profile Picture Preview
profilePicture.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            previewImage.src = reader.result;
            previewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Form Validation
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert('Form Submitted Successfully!');
    }
});

function validateForm() {
    const username = document.getElementById('set_name').value.trim();
    const dateOfBirth = document.getElementById('set_date').value;
    const education = document.getElementById('set_education').value.trim();
    const skills = document.getElementById('set_skills').value.trim();
    const about = aboutField.value.trim();
    const picture = profilePicture.files.length;

    if (!username || !dateOfBirth || !education || !skills || !about || picture === 0) {
        alert('Please fill all fields and upload a profile picture.');
        return false;
    }
    return true;
}
