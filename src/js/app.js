import '../styles/main.scss';

const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let email = '';

    Array.from(form.elements).forEach((formElement) => {
      if (
        formElement.value &&
        formElement.type !== 'submit' &&
        formElement.type !== 'reset'
      ) {
        email += `${formElement.name}:%20${formElement.value}%0a`;
      }
    });

    location.href =
      'mailto:wolf.usingen@t-online.de?subject=Antwort%20ueber%20Ferienwohnungen-Frankfurt.com&body=Ihre%20Daten:%0a%0a' +
      email;
  });
}
