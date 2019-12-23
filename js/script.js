const container = document.querySelector('.grid-container');

const cells_number = 16 * 16;

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

for (let i=0; i < cells_number; i++){
    let new_cell = document.createElement('div');
    new_cell.setAttribute('id', i);
    new_cell.textContent = i;
    new_cell.addEventListener("mouseenter", mouseEnterHandler);
    new_cell.addEventListener("mouseleave", mouseLeaveHandler);
    container.appendChild(new_cell);
}

