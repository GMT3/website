export const validateInput = (name, value) => {
  let hasError = false,
    error = '';

  switch (name) {
    case 'message':
      if (value.trim() === '') {
        hasError = true;
        error = 'Message is required';
      } else {
        hasError = false;
        error = '';
      }
      break;
    case 'subject':
      if (value.trim() === '') {
        hasError = true;
        error = 'Subject is required';
      } else {
        hasError = false;
        error = '';
      }
      break;
    case 'none':
      if (value.trim() === '') {
        hasError = true;
        error = 'Subject is required';
      } else if (!/^[a-zA-Z ]+$/.test(value)) {
        hasError = true;
        error = 'Invalid. Avoid Special characters';
      } else {
        hasError = false;
        error = '';
      }
      break;
    case 'email':
      if (value.trim() === '') {
        hasError = true;
        error = 'Email is required';
      } else if (
        !/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(value)
      ) {
        hasError = true;
        error = 'Invalid Email. Please enter a valid email';
      } else {
        hasError = false;
        error = '';
      }
      break;
    default:
      break;
  }

  return { hasError, error };
};
