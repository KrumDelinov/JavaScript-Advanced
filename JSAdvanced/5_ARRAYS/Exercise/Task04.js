function Solve(array = []) {

    let rotations = +array.pop() % array.length;



    for (let i = 0; i < rotations; i++) {
        
        let lastElement = array.pop();
        array.unshift(lastElement);
        
    }

    console.log(array.join(" "))
    
}

Solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']

)