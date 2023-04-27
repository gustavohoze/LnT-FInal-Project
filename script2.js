function submitForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const eventInput = document.getElementById('event');
  
  let errors = [];

  if (nameInput.value.length < 3) {
    errors.push('Name must be at least 3 characters long');
  }

  if (!emailInput.value.includes('@')) {
    errors.push('Email must contain @');
  }

  if (!phoneInput.value.match(/^08\d{8,14}$/)) {
    errors.push('Phone number must start with 08 and be between 10 and 14 digits long');
  }

  if (!eventInput.value) {
    errors.push('Please select an event');
  }

  if (errors.length > 0) {
    alert(errors.join('\n'));
  } else {
    alert('Form submitted successfully!');
  
  }
}
