const arrow = document.querySelector('.arrow');
const primaryInfo = document.querySelector('.primary-info');

arrow.addEventListener('click', () => {
  const xCoord = primaryInfo.getBoundingClientRect().x;
  const yCoord = primaryInfo.getBoundingClientRect().y;

  window.scrollTo({ top: yCoord, left: xCoord, behavior: 'smooth'})
});