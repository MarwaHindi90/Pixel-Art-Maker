const sizePicker = document.querySelector('.size-picker');
const table = document.getElementById('canvasInp');
var eraser = document.querySelector('#erase');


function makeGrid() {

    let rows = document.getElementById('heightInp').value;
    let cols = document.getElementById('widthInp').value;

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    // for rows
    for (let i = 1; i <= rows; i++) {
        let gridRow = document.createElement('tr');
        table.appendChild(gridRow);

        // for cols
        for (let j = 1; j <= cols; j++) {
            let gridCell = document.createElement('td');
            gridRow.appendChild(gridCell);

            gridCell.addEventListener('mousedown', function(e) {
                // console.log(e.target);
                const color = document.querySelector('#colorInp').value;
                this.style.backgroundColor = color;
            })
        }
    }
}

// submit form 
sizePicker.addEventListener('submit', function(e) {
    e.preventDefault();
    makeGrid();
    erase();
});

// Removes color from cell upon double-click
table.addEventListener('dblclick', function(e) {
    e.target.style.backgroundColor = null;
});

function erase() {
    eraser.innerHTML = 'Double-Click To Erase'

}