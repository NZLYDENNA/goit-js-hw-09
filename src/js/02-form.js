const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const { email, message } = JSON.parse(savedData);
  form.elements.email.value = email || '';
  form.elements.message.value = message || '';
}

form.addEventListener('input', () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});
form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  if (!formData.email || !formData.message) {
    alert('Both fields must be filled out!');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
