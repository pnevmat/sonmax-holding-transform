const dateNow = new Date();

const hours = dateNow.getHours();
const minutes = dateNow.getMinutes();

const oneDayMs = 24 * 60 * 60 * 1000;
const nextDayMs = dateNow.getTime() + oneDayMs;

const nextDayDate = new Date(nextDayMs);

const dayToShow =
  hours >= 18 && minutes >= 1 ? nextDayDate.getDate() : dateNow.getDate();

const monthsArr = [
  'січня',
  'лютого',
  'березня',
  'квітня',
  'травня',
  'червня',
  'липня',
  'серпня',
  'вересня',
  'жовтня',
  'листопада',
  'грудня',
];

const month =
  nextDayDate.getMonth() !== dateNow.getMonth() && dayToShow === 1
    ? nextDayDate.getMonth
    : dateNow.getMonth();

const monthToShow = monthsArr[month];

const headerDateText = `${dayToShow} ${monthToShow} о 19:00`;
const masterclassProgramDateText = `${dayToShow} ${monthToShow} о 19:00`;

const headerDateSpan = document.querySelector('[headerDate]');
const masterclassProgramDateSpan = document.querySelector(
  '[masterclassprogramdate]',
);

headerDateSpan.innerText = headerDateText;
masterclassProgramDateSpan.innerText = masterclassProgramDateText;
