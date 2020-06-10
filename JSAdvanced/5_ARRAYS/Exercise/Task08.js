function playTicTac(moves = []) {

    
    const dashBoard = [[false, false, false], [false, false, false], [false, false, false]]

    let player1 = "X"
    let player2 = "O"
    let curentPlayer 

    for (let index = 0; index < moves.length; index++) {
        let move = moves[index];
        let coordinatesRow = move[0];
        let coordinatesCol = move[2]
        let isSame = true

       makeMove(coordinatesRow, coordinatesCol)

   
        function makeMove(row, col) {

            if (dashBoard[row][col] === false) {

                if (curentPlayer === undefined) {
                    curentPlayer = player1
                }
               
                dashBoard[row][col] = curentPlayer;

                if (curentPlayer === player1) {
                    curentPlayer = player2
                    
                } else {
                    curentPlayer = player1
                    
                }

                
              
            }else{

                console.log("This place is already taken. Please choose another!")

            }
            
            chackForWin(dashBoard, coordinatesRow, coordinatesCol)
           
            
            
        }

        function chackForWin(matrrix = [], x, y) {

            let player = matrrix[x][y]

            checkRows();

            checkCols();

            checkDiagonals();


            function checkCols() {

                for (let col = 0; col < matrrix.length; col++) {
                    
                    if (isSame === true) {
                        break;
                        
                    }
                    for (let row = 0; row < matrrix.length; row++) {
                        let sighn = matrrix[row][col]
                        if (sighn !== player) {
                            isSame = false;
                            break;
                        }
                        if (isSame === true) {
    
                            console.log(`Player ${player} wins`)
                            break;
                        }
                    }
                }
                
            }

            function checkRows() {

                for (let row = 0; row < matrrix.length; row++) {

                 
    
                    for (let col = 0; col < matrrix.length; col++) {
                        
                        let sighn = matrrix[row][col]
                        if (sighn !== player) {
                            isSame = false;
                            break;
                        }
                    }
                 
                    if (isSame === true) {
    
                        console.log(`Player ${player} wins`)
                        break;
                    }
                    
                }
                
            }

            function checkDiagonals() {

                let firstIndex = 0;
                let secondIndex = matrrix[0].length - 1;
                
                for (let row = 0; row < matrrix.length; row++) {

                    if (isSame === true) {
                        break;
                        
                    }
                    
                    for (let col = row; col <= row; col++) {

                        
                        let sighn = matrrix[row][col]
                        if (sighn !== player) {
                            isSame = false;
                            break;
                        }
                        
                    }

                    if (isSame === true) {
    
                        console.log(`Player ${player} wins`)
                        break;
                    }
                    
                }
            }

           
        }

        if (isSame === true) {

            break;
        }

    }
    console.log(dashBoard)
}

playTicTac(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]

)