function magicMatrix(matrix = []) {

    let isMagic = true;

    let rows = matrix.length

    let sum = matrix[0].reduce((a, b) => a + b, 0)

    for (let row = 0; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce((a, b) => a + b, 0)
      
        if (rowSum !== sum) {
            isMagic = false;
            console.log(isMagic)
            return;
        }

        for (let col = 0; col <= matrix[row].length - 1; col++) {

            let colSum = 0;

            for (let r = 0; r < matrix.length; r++) {
               
                colSum += matrix[r][col]
            }
            if (colSum !== sum) {
                isMagic = false;
                console.log(isMagic)
                return;
            }
        }

      
    }
    console.log(isMagic)
    
}

magicMatrix([
    [0, 0, 1],
    [0, 1, 0]]
   )