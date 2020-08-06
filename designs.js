let form = document.getElementById("sizePicker");
let canvas = document.getElementById('pixelCanvas');
let color = document.getElementById('colorPicker');

function makeGrid(event) {

    clearGrid();

    let height = document.getElementById('inputHeight');
    let width = document.getElementById('inputWidth');

    for (i = 1; i <= height.value; i++){

        let tr = document.createElement('tr');
        canvas.appendChild(tr);

        for (j = 1; j<= width.value; j++){

            let td = document.createElement('td')
            td.addEventListener('click', function paint(){
                td.bgColor = color.value;
            });
            canvas.lastChild.appendChild(td);
        }
    }

    event.preventDefault();
}


function clearGrid() {

    while (canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
}

form.addEventListener('submit', makeGrid);

/*
function paint(event) {
        event.target.bgColor = color.value;
}

canvas.addEventListener('click', paint);
*/
