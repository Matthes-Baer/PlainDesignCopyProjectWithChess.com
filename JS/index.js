let chessFields = document.getElementsByClassName('chessField');
let j;
let firstDiv = document.createElement('div');
    firstDiv.id = 'firstDiv'

let secondDiv = document.createElement('div');
    secondDiv.id = 'secondDiv'

const chessFunction = () => {
    // get current click position
    for (let i = 0; i < chessFields.length; i++) {
        chessFields[i].addEventListener("click", function() {
            j = i;
            checkPiece(j);
        })
    }
}

const checkPiece = (position) => {
    // check for piece type and add respective actions
    if (chessFields[position].classList.contains('whitePawn')) {
        if (!firstDiv) {
            document.getElementById('firstDiv').remove();
        }
        if (!secondDiv) {
            document.getElementById('secondDiv').remove();
        }
        chessFields[position - 8].appendChild(firstDiv);
        chessFields[position - 16].appendChild(secondDiv);
    }

    if (chessFields[position].classList.contains('blackPawn')) {
        if (!firstDiv) {
            document.getElementById('firstDiv').remove();
        }
        if (!secondDiv) {
            document.getElementById('secondDiv').remove();
        }
        chessFields[position + 8].appendChild(firstDiv);
        chessFields[position + 16].appendChild(secondDiv);
    }

    if (chessFields[position].classList.contains('whiteKnight')) {
        if (!firstDiv) {
            document.getElementById('firstDiv').remove();
        }
        if (!secondDiv) {
            document.getElementById('secondDiv').remove();
        }
        chessFields[position - 15].appendChild(firstDiv);
        chessFields[position - 17].appendChild(secondDiv);
    }

    if (chessFields[position].classList.contains('blackKnight')) {
        if (!firstDiv) {
            document.getElementById('firstDiv').remove();
        }
        if (!secondDiv) {
            document.getElementById('secondDiv').remove();
        }
        chessFields[position + 15].appendChild(firstDiv);
        chessFields[position + 17].appendChild(secondDiv);
    } 
}

window.onload = chessFunction();