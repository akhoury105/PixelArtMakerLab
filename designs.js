// Revised the code to include comments.
// Also tweaked some things based on suggestions from the original review.
// Changed my variables from let to const because I'm not changing the values.

const form = document.getElementById("sizePicker");
const canvas = document.getElementById('pixelCanvas');
const color = document.getElementById('colorPicker');

/*

This function generates the grid based on the users input.
It is called when the submit button is clicked.

*/
function makeGrid(event) {

    clearGrid();

    const height = document.getElementById('inputHeight');
    const width = document.getElementById('inputWidth');

    for (i = 1; i <= height.value; i++){

        const row = canvas.insertRow();

        for (j = 1; j<= width.value; j++){

            const cell = row.insertCell();
            cell.addEventListener('click', function paint(){
                cell.bgColor = color.value;
            });
        }
    }

    event.preventDefault();
}

/*
    Changed how the grid resets.
    Not sure if this way is PC but it's the only way I could figure out how
    using the innerHTML.
*/
function clearGrid() {
    canvas.innerHTML = null;
}

form.addEventListener('submit', makeGrid);
