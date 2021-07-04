
const gridContainer = document.querySelector('.grid-container');
let gridCells = document.getElementsByClassName('grid-cell');
const refreshBtn = document.querySelector('.refresh-btn');

const btns = document.getElementsByClassName('btn');

createGrid();

Array.from(btns).forEach(btn => {
    btn.addEventListener('click', setSize);
});

function createGrid(size = 16){
    let gridSize = size * size;
    for(let i = 1; i <= gridSize; i++){
        let gridCell = document.createElement('div');
        gridCell.classList.add("grid-cell");
        gridCell.textContent = " ";
        gridContainer.appendChild(gridCell);
    }
}

function clearGrid(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

Array.from(gridCells).forEach(cell =>{
    cell.addEventListener('mouseenter', changeOnHover);
});

refreshBtn.addEventListener('click', refreshCells);

function setSize(event){
    let size = event.target.value;
    clearGrid();
    gridContainer.style.cssText = `grid-template-columns: repeat(${size}, auto);`
    createGrid(event.target.value);
    gridCells = document.getElementsByClassName('grid-cell');
    Array.from(gridCells).forEach(cell =>{
        cell.addEventListener('mouseenter', changeOnHover);
    });
    
}
function changeOnHover(event){
    event.target.style.backgroundColor = "black";
}

function refreshCells(event){
    Array.from(gridCells).forEach( cell =>{
        cell.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    });
}

