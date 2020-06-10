function diagonals(params) {

    const dashBoard = [[1, 0, 2], [0, 0, 0], [2, 0, 1]]

    console.log(leftSum(dashBoard));

    function leftSum(arr = []) {

        arr = dashBoard;
        let sum = 0;
        
        for (let row = 0; row < arr.length; row++) {
            const element = arr[row];

            for (let col = row; col <= row; col++) {
                const element = arr[row][col];

                sum += element;
                
            }
            
        }

        return sum;
    }

    
}

diagonals();