const doc = {
    calcButton: document.querySelector('#calcButton'),
    deleteButton: document.querySelector('#deleteButton'),
    baseInput: document.querySelector('#base'),
    heightInput: document.querySelector('#height'),
    areaInput: document.querySelector('#area'),
    areaDiv: document.querySelector('#areadiv')
};
const state = {
    base: 0,
    height: 0,
    area: 0,
    areaInputVisible: false
};

window.addEventListener('load', () => {
    init();
});

function init() {    
    doc.calcButton.addEventListener('click', () => {
        getInputData();
        startCalculation();
        render();
    });
    doc.deleteButton.addEventListener('click', () => {
        state.areaInputVisible = false;
        render();
    });
    render();
}

function getInputData() {
    state.base = Number(doc.baseInput.value);
    state.height = Number(doc.heightInput.value);
}

function startCalculation() {
    state.area = calcTriangleArea(state.base, state.height);
    state.areaInputVisible = true;
}

function calcTriangleArea(base, height) {
    return base * height / 2;
}

function render() {    
    if(state.areaInputVisible) {
        doc.areaInput.value = state.area;
        doc.areaDiv.style.display = 'block';
    }else {
        doc.areaDiv.style.display = 'none';
        clearInputData();
    }
}

function clearInputData() {
    doc.baseInput.value = '';
    doc.heightInput.value = '';
}