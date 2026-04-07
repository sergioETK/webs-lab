const viewport = document.querySelector('#gamesViewport');
const track = document.querySelector('.carousel__track');
const prev = document.querySelector('.carousel__btn--prev');
const next = document.querySelector('.carousel__btn--next');

if (viewport && track && prev && next) {
  const scrollAmount = () => Math.min(viewport.clientWidth * 0.72, 420);

  prev.addEventListener('click', () => {
    viewport.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    viewport.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });
}
