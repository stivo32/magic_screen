const container = document.querySelector('.grid-container');
const button = document.querySelector('#size-input');

const initial_size = 16;
const colorType = 'hsl';

const colorStorage = {};

console.log(Object.keys(colorStorage));


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
    console.log(colorStorage);
    
    event.target.style.background = setColor(elementId, colorType);
};

const mouseLeaveHandler = event => {
    event.target.style.background = '';
};

const setColor = (elementId, type) => {
    let previousColor;
    let currentColor;
    if (Object.keys(colorStorage).includes(elementId)){
        previousColor = colorStorage.elementId;
        if (type === 'rgb') {
            console.log(1);
            
            currentColor = previousColor;
        } else if (type === 'hsl'){
            console.log(2);
            
            currentColor = setDarkerColor(previousColor);
            colorStorage.elementId = currentColor;
        }
    }
    else {
        console.log(3);
        
        currentColor = randomColor(colorType);
        colorStorage.elementId = currentColor;
    }
    return `${colorType}(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
};

const setDarkerColor = color => {
    let [hue, saturate, lightness] = color;
    let currentLightness = lightness * 1.1 <= 100? lightness * 1.1: 100;
    return [hue, saturate, currentLightness];
};

const randomColor = type => {
    switch (type){
        case 'rgb': return randomRgb();
        case 'hsl': return randomHsl();
        default: console.log('unknown type of color'); return [0, 0, 0];
    };

};

const randomRgb = () => {
    const red = randomColorIntensity();
    const green = randomColorIntensity();
    const blue = randomColorIntensity();
    console.log(`rgb(${red}, ${green}, ${blue})`);
    
    return [red, green, blue]
};

const randomHsl = () => {
    console.log(4);
    
    const hue = Math.random() * 360;
    const saturate = Math.random() * 100;
    const lightness = Math.random() * 100;
    console.log(`hsl(${hue}, ${saturate}, ${lightness})`);
    return [hue, saturate. lightness]
};

const randomColorIntensity = () => {
    return Math.floor(Math.random() * 256)
};

const drawGrid = (row_size, col_size) => {
    for (let i = 0; i < row_size; i++){
        for (let j = 0; j < col_size; j++){
            let number = i + j;
            let new_cell = document.createElement('div');
            new_cell.setAttribute('id', number);
            new_cell.textContent = number;
            new_cell.addEventListener("mouseenter", mouseEnterHandler);
            new_cell.addEventListener("mouseleave", mouseLeaveHandler);
            container.appendChild(new_cell);
        };
    };
};

drawGrid(initial_size, initial_size);