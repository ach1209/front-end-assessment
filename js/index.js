const arrow = document.querySelector('.arrow');
const primaryInfo = document.querySelector('.primary-info');

arrow.addEventListener('click', () => {
  let xCoord = primaryInfo.getBoundingClientRect().x;
  let yCoord = primaryInfo.getBoundingClientRect().y;

  window.scrollTo({ top: yCoord, left: xCoord, behavior: 'smooth'})
});