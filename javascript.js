
//create grid of divs using loop
const gridContainer = document.querySelector('#gridContainer'); //remember: # refers to an ID tag

let gridAmount = 50; //will update to include user selection (cannot be greater than 100)

for (let i=0; i<gridAmount; i++){
    for (let j=0; j<gridAmount; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    } 
};

const cellList = document.querySelectorAll('.cell');

let gridPercent = (100/gridAmount) + '%';

for(cell of cellList) {
    cell.style.flexBasis = gridPercent;
}

//console.log(cellList); //returns a nodeList
