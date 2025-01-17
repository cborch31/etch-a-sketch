
const gridContainer = document.querySelector('#gridContainer'); 
const mainPage = document.querySelector('#mainPage');
const btn = document.querySelector('#inputGrid');

const pageDirections = document.createElement('div');
pageDirections.classList.add('pageDirections');
pageDirections.textContent = 'After selecting a palette size, click and drag on the etch-a-sketch to draw. Hold shift to erase.';

let cell = '';
let gridAmount = 0;
let colors = ['#ffbfbf','#ffe1bf','#fff2bf','#dbffbf','#bfffe9','#bfdfff', '#cebfff'];

mainPage.appendChild(btn);
mainPage.appendChild(pageDirections);
mainPage.appendChild(gridContainer);

function gridAmountPrompt() {
    let entry = prompt('Please input the size of your grid between 1 and 100. For instance, inputting 8 will create an 8x8 grid.');
    if (entry != null) {
        if (entry < 1 || entry > 100) {
            alert('Invalid entry. Please select a number between 1 and 100.');
        } else { 
            console.log(entry);
            console.log(gridContainer);
            gridAmount = entry;
            makeGrid();
        }
    }
};

btn.addEventListener('click', gridAmountPrompt);

function makeGrid(){
    document.getElementById('gridContainer').innerHTML = '';
    for (let i=0; i<gridAmount; i++){
        for (let j=0; j<gridAmount; j++) {
            cell = document.createElement('div');
            cell.classList.add('cell');
            gridContainer.appendChild(cell);
        } 
    };

    cellList = document.querySelectorAll('.cell');

    let gridPercent = (100/gridAmount) + '%';

    for(cell of cellList) {
        cell.style.flexBasis = gridPercent;
    };

    cellList.forEach(cell => {
        cell.addEventListener('mouseenter', function(e){
            if(e.shiftKey && e.buttons >0){
                cell.style.backgroundColor = 'white';
                cell.style.color = 'white';
            } else if(e.buttons >0){
            cell.style.backgroundColor = colors[(Math.floor(Math.random() * colors.length))];
            };
        })
    });
};
