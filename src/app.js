
const state = {
    base: 0,
    height: 0,
    area: 0
};

window.addEventListener('load', () => {
    init();
});

function init() {
    const calcButton = document.querySelector('#calcButton');
    calcButton.addEventListener('click', () => {
        getInputData();
        startCalculation();
        render();
    });
}

function getInputData() {
    const baseInput = document.querySelector('#base');
    const heightInput = document.querySelector('#height');
    state.base = Number(baseInput.value);
    state.height = Number(heightInput.value);
}

function startCalculation() {
    state.area = calcTriangleArea(state.base, state.height);    
}

function calcTriangleArea(base, height) {
    return base * height / 2;
}

function render() {
    const areaInput = document.querySelector('#area');
    areaInput.value = state.area;
}
