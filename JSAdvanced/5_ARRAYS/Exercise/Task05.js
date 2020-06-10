function solve(array = []) {

    let biggest = array[0];

    const arrange = [];

    array.map( x => {
        if (x >= biggest) {
            arrange.push(x);
            biggest = x;
        }
    })

    console.log(arrange.join("\n"))
}

solve(
    [20, 
        3, 
        2, 
        15,
        6, 
        1]
        
    )