const container = document.querySelector('.grid-container');
const button = document.querySelector('#size-input');

const initial_size = 16;

button.addEventListener("click", (event) => {
    let size = +prompt("Задайте размер сетки");
    redrawGrid(size, size);
})

const redrawGrid = (row_size, col_size) => {
    container.innerHTML = "";
    container.style.gridTemplate = `repeat(${row_size}, 1fr) / repeat(${col_size}, 1fr)`;
    drawGrid(row_size, col_size);
}


const mouseEnterHandler = event => {
    event.target.style.background = randomRgb();
};

const mouseLeaveHandler = event => {
    event.target.style.background = '';
};

const randomRgb = () => {
    const red = randomColorIntensity();
    const green = randomColorIntensity();
    const blue = randomColorIntensity();
    console.log(`rgb(${red}, ${green}, ${blue})`);
    
    return `rgb(${red}, ${green}, ${blue})`
};

const randomColorIntensity = () => {
    return Math.floor(Math.random() * 256)
};

const drawGrid = (row_size, col_size) => {
    for (let i=0; i < row_size; i++){
        for (let j=0; j < col_size; j++){
            let number = i + j;
            let new_cell = document.createElement('div');
            new_cell.setAttribute('id', number);
            new_cell.textContent = number;
            new_cell.addEventListener("mouseenter", mouseEnterHandler);
            new_cell.addEventListener("mouseleave", mouseLeaveHandler);
            container.appendChild(new_cell);
    }
}
};

drawGrid(initial_size, initial_size);


