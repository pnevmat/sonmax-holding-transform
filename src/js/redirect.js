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

redirectBtn.addEventListener('click', () => {
  if (inputsList.find(input => input.value === '' || input.value === null)) {
    return;
  }

  window.open('https://privatebusiness.academy/finish-reg/');
});
