const redirectBtn = document.querySelector('[final-offer-submit-btn]');
const formChildrenList = [...document.querySelector('[form]').children];
const inputsList = [];
formChildrenList.forEach(child => {
  const childChildrenList = [...child.children].filter(
    child => child.nodeName === 'INPUT',
  );
  if (childChildrenList[0] !== undefined) {
    inputsList.push(childChildrenList[0]);
  }
});

let formNumber = null;
redirectBtn.addEventListener('click', () => {
  const regType = 'Трансформація бізнес-моделі';
  formNumber = 1;
  if (inputsList.find(input => input.value === '' || input.value === null)) {
    return;
  }

  if (validateForm(formNumber)) {
    const phone = document.getElementById('phone' + formNumber).value;
    const email = document.getElementById('email' + formNumber).value;
    const name = document.getElementById('name' + formNumber).value;

    const botToken = '6925775224:AAFChKopPUZoRHjTOzhuT7DqFmJ9E9Dh47A';
    const chatId = '-1002082922592';
    const message = `${regType} \n${name} \n${phone} \n${email}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // alert("Application sent! Thank you!");
        // window.location.href = '/methodology/thank';
      })
      .catch(error => {
        alert('Error sending application!');
      });

    window.open('https://privatebusiness.academy/finish-reg/');
  }
});

function validateForm(formNumber) {
  const name = document.getElementById('name' + formNumber).value.trim();
  const email = document.getElementById('email' + formNumber).value.trim();
  const phone = document.getElementById('phone' + formNumber).value.trim();

  // const nameError = document.getElementById('nameError' + formNumber);
  // const emailError = document.getElementById('emailError' + formNumber);
  // const phoneError = document.getElementById('phoneError' + formNumber);

  let isValid = true;

  if (name.length < 4) {
    // nameError.textContent = 'Ім’я повинно містити принаймні 4 букви';
    isValid = false;
  } else {
    // nameError.textContent = '';
  }

  if (!validateEmail(email)) {
    // emailError.textContent = 'Введіть коректну електронну адресу';
    isValid = false;
  } else {
    // emailError.textContent = '';
  }

  if (!validatePhone(phone)) {
    // phoneError.textContent = 'Введіть коректний номер телефону';
    isValid = false;
  } else {
    // phoneError.textContent = '';
  }

  return isValid;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex =
    /^\+?(\d{1,3})?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{2})[-. ]*(\d{2})$/;
  return phoneRegex.test(phone);
}
