
const container = document.getElementById('container');
const gridSize = 16; 
const totalSquares = gridSize * gridSize;

for (let i = 0; i < totalSquares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseenter', () => {
    square.style.backgroundColor = 'lightblue';
  });

  square.addEventListener('mouseleave', () => {
    square.style.backgroundColor = 'white';
  });

  
  container.appendChild(square);
}

