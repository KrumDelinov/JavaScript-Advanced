function Solve(array) {

    
    let step = parseInt(array.pop()) ;

    for (let index = 0; index < array.length; index += step) {
        const element = array[index];

        console.log(element)
        
    }
}

Solve(['dsa',
'asd', 
'test', 
'tset', 
'2']
)