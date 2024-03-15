// Open modal buttons
const headerButton = document.querySelector('[header-button]');
const masterclassProgramButton = document.querySelector(
  '[masterclass-program-button]',
);
// Modals
const headerModal = document.querySelector('[header-modal]');
const masterclassProgramModal = document.querySelector(
  '[masterclass-program-modal]',
);

// Close modal buttons
const headerModalCloseBtn = document.querySelector('[header-close-btn]');
const masterclassProgramCloseBtn = document.querySelector(
  '[masterclass-program-close-btn]',
);

// Submit form buttons
const headerSubmitBtn = document.querySelector('[header-submit-btn]');
const masterclassProgramSubmitBtn = document.querySelector(
  '[masterclass-program-submit-btn]',
);
const finalOfferSubmitBtn = document.querySelector('[final-offer-submit-btn]');

// Open modal listeners
headerButton.addEventListener('click', () => openModal('headerButton'));
masterclassProgramButton.addEventListener('click', () =>
  openModal('masterclassProgramButton'),
);

// Close modal listeners
headerModalCloseBtn.addEventListener('click', () =>
  closeModal('headerModalCloseBtn'),
);
masterclassProgramCloseBtn.addEventListener('click', () =>
  closeModal('masterclassProgramCloseBtn'),
);

// Submit form listeners
headerSubmitBtn.addEventListener('click', () =>
  submitForm(null, 'headerModalCloseBtn'),
);
masterclassProgramSubmitBtn.addEventListener('click', () =>
  submitForm(null, 'masterclassProgramCloseBtn'),
);
finalOfferSubmitBtn.addEventListener('click', () => submitForm(null, 'form'));

function openModal(button) {
  if (button === 'headerButton') {
    headerModal.classList.remove('is-hiden');
  } else if (button === 'masterclassProgramButton') {
    masterclassProgramModal.classList.remove('is-hiden');
  }
}

function closeModal(modal) {
  if (modal === 'headerModalCloseBtn') {
    headerModal.classList.add('is-hiden');
  } else if (modal === 'masterclassProgramCloseBtn') {
    masterclassProgramModal.classList.add('is-hiden');
  }
}

function submitForm(data, modal) {
  if (modal === 'form') {
    return;
  }
  closeModal(modal);
}
