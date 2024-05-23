const container = document.querySelector('.container');
const sqrNum = document.querySelector("#sqrNum");
const output = document.querySelector(".sqrNum-output");

sqrNum.addEventListener("input", () => {
    const value = sqrNum.value;
    output.textContent = value;
    createGrid(value);
});

let input = 16;
createGrid(input);

function createGrid(input) {

    container.textContent = '';

    for (let i = 0; i < input; i++) {

        let rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');

        for (let x = 0; x < input; x++) {
            let squareDiv = document.createElement('div');
            squareDiv.classList.add('square-div');
            rowContainer.appendChild(squareDiv);

            squareDiv.addEventListener("mouseover", () => {
                squareDiv.style.backgroundColor = `rgb(${randomizeColor()}, ${randomizeColor()}, ${randomizeColor()})`;
            });
        }

        container.appendChild(rowContainer);
        output.textContent = sqrNum.value;

    };

};

function randomizeColor () {
    const randomColor = Math.floor(Math.random() * 255);
    return randomColor;
};