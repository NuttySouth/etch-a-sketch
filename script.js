const gridItems = document.getElementsByClassName('grid-cell');
const refreshBtn = document.querySelector('.refresh-btn');

Array.from(gridItems).forEach(item =>{
    item.addEventListener('mouseenter', changeOnHover);
});

refreshBtn.addEventListener('click', refreshCells);

function changeOnHover(event){
    event.target.style.backgroundColor = "black";
}

function refreshCells(event){
    Array.from(gridItems).forEach( item =>{
        item.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    });
}