// eslint-disable-next-line max-lines-per-function
window.onload = () => {
  const black = document.querySelector('#black');
  black.style.backgroundColor = 'black';
  const blue = document.querySelector('#blue');
  blue.style.backgroundColor = 'blue';
  const pink = document.querySelector('#pink');
  pink.style.backgroundColor = 'pink';
  document.querySelector('#orange');
  const orange = document.querySelector('#orange');
  orange.style.backgroundColor = 'orange';
  const pixel = document.querySelectorAll('.pixel');
  // requisito 6

  black.classList.add('selected');

  // requisito 7

  black.addEventListener('click', () => {
    black.classList.add('selected');
    blue.classList.remove('selected');
    pink.classList.remove('selected');
    orange.classList.remove('selected');
  });

  blue.addEventListener('click', () => {
    blue.classList.add('selected');
    black.classList.remove('selected');
    pink.classList.remove('selected');
    orange.classList.remove('selected');
  });

  pink.addEventListener('click', () => {
    pink.classList.add('selected');
    black.classList.remove('selected');
    blue.classList.remove('selected');
    orange.classList.remove('selected');
  });

  orange.addEventListener('click', () => {
    orange.classList.add('selected');
    black.classList.remove('selected');
    pink.classList.remove('selected');
    blue.classList.remove('selected');
  });

  // Requisito 8

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', () => {
      pixel[i].classList.add('pixelSelected');
      if (black.classList.contains('selected')) {
        pixel[i].style.backgroundColor = 'black';
      } else if (blue.classList.contains('selected')) {
        pixel[i].style.backgroundColor = 'blue';
      } else if (pink.classList.contains('selected')) {
        pixel[i].style.backgroundColor = 'pink';
      } else if (orange.classList.contains('selected')) {
        pixel[i].style.backgroundColor = 'orange';
      }
    });
  }

  // Requisito 9

  const resetButton = document.querySelector('#clear-board');

  for (let i = 0; i < pixel.length; i += 1) {
    resetButton.addEventListener('click', () => {
      if (pixel[i].classList.contains('pixelSelected')) {
        pixel[i].style.backgroundColor = '';
      }
    });
  }
};
