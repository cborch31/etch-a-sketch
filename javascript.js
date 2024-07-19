
//create grid of divs using loop
const gridContainer = document.querySelector('#gridContainer'); //remember: # refers to an ID tag

let gridAmount = 16; //will update to include user selection (cannot be greater than 100)

for (let i=0; i<gridAmount; i++){
    for (let j=0; j<gridAmount; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    } 
};

const cellList = document.querySelectorAll('cell');
// cellList.style.flexBasis = '6.25%'; this doesn't work.

console.log(cellList); //returns a nodeList
