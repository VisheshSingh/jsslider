function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider found!');
  }

  let prev;
  let current;
  let next;

  const slides = slider.querySelector('.slides');
  const prevBtn = slider.querySelector('.goToPrev');
  const nextBtn = slider.querySelector('.goToNext');

  function startSlider() {
    current = slides.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;

    console.log({ prev, current, next });
  }

  function applyClasses() {
    prev.classList.add('prev');
    current.classList.add('current');
    next.classList.add('next');
  }

  startSlider();
  applyClasses();

  function move(direction) {
    const classes = ['prev', 'current', 'next'];
    prev.classList.remove(...classes);
    current.classList.remove(...classes);
    next.classList.remove(...classes);
    if (direction === 'back') {
      [prev, current, next] = [
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    applyClasses();
  }

  prevBtn.addEventListener('click', () => move('back'));
  nextBtn.addEventListener('click', move);
}

const slider1 = Slider(document.querySelector('.slider'));
const slider2 = Slider(document.querySelector('.dog-slider'));
