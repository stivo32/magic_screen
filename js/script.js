const container = document.querySelector('.grid-container');
const button = document.querySelector('#size-input');

const initial_size = 16;
const colorStorage = {};

button.addEventListener("click", (event) => {
    let size = +prompt("Задайте размер сетки");
    redrawGrid(size, size);
});

const redrawGrid = (row_size, col_size) => {
    container.innerHTML = "";
    container.style.gridTemplate = `repeat(${row_size}, 1fr) / repeat(${col_size}, 1fr)`;
    drawGrid(row_size, col_size);
};

const mouseEnterHandler = event => {
    const elementId = event.target.id;
    event.target.style.background = setColor(elementId);
};

const mouseLeaveHandler = event => {
    event.target.style.background = '';
};

const setColor = (elementId) => {
    let previousColor;
    let currentColor;
    if (elementId in colorStorage){
        previousColor = colorStorage[elementId];
        currentColor = setDarkerColor(previousColor);
        colorStorage[elementId] = currentColor;
    } else {
        currentColor = randomHsl();
        colorStorage[elementId] = currentColor;
    }
    return `hsl(${currentColor[0]}, ${currentColor[1]}%, ${currentColor[2]}%)`;
};

const setDarkerColor = color => {
    let [hue, saturate, lightness] = color;
    let currentLightness = lightness - 10 > 0? lightness - 10: 0;
    return [hue, saturate, currentLightness];
};

const randomHsl = () => {
    const hue = Math.random() * 360;
    const saturate = Math.random() * 100;
    const lightness = Math.random() * 100;
    return [hue, saturate, lightness]
};

const drawGrid = (row_size, col_size) => {
    for (let i = 0; i < row_size; i++){
        for (let j = 0; j < col_size; j++){
            let number = i + j;
            let new_cell = document.createElement('div');
            new_cell.setAttribute('id', number);
            new_cell.addEventListener("mouseenter", mouseEnterHandler);
            new_cell.addEventListener("mouseleave", mouseLeaveHandler);
            container.appendChild(new_cell);
        }
    }
};

drawGrid(initial_size, initial_size);