const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const storageItems = localStorage.getItem(localStorageKey);
if (storageItems) {
  const parsedData = JSON.parse(storageItems);
  form.elements.email.value = parsedData.email || '';
  form.elements.message.value = parsedData.message || '';
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
}

form.addEventListener('input', evt => {
  const { name, value } = evt.target;
  formData[name] = value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('Заповніть будь ласка поля форми!');
    return;
  }
  console.log({ email, message });
  localStorage.removeItem(localStorageKey);
  form.reset();

  formData.email = '';
  formData.message = '';
});
