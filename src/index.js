import './index.css';
import gnomeImage from './goblin.png';

const container = document.getElementById('game-container');


const cells = [];
for (let i = 0; i < 16; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
    cells.push(cell);
}


const gnome = document.createElement('img');
gnome.src = gnomeImage;
gnome.alt = 'Gnome';
gnome.classList.add('gnome');


let currentCellIndex = Math.floor(Math.random() * cells.length);
cells[currentCellIndex].appendChild(gnome);


setInterval(() => {
    let newCellIndex;
    do {
        newCellIndex = Math.floor(Math.random() * cells.length);
    } while (newCellIndex === currentCellIndex);

    cells[newCellIndex].appendChild(gnome);
    currentCellIndex = newCellIndex;
}, 1000);
