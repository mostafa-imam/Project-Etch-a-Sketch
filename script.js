const container = document.querySelector('.container');
const btn = document.querySelector('button');

let initialInput = 16;

for (let i = 0; i < initialInput; i++) {

    let rowContainer = document.createElement('div');
    rowContainer.classList.add('row-container');

    for (let x = 0; x < initialInput; x++) {

        let squareDiv = document.createElement('div');
        squareDiv.classList.add('square-div');
        rowContainer.appendChild(squareDiv);
        
        squareDiv.addEventListener("mouseover", () => {
            squareDiv.style.backgroundColor = "black";
        });

    }

    container.appendChild(rowContainer);

};