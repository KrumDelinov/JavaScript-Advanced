function Solve(array = []) {

    let newArray = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if (element === "add") {
            newArray.push(index + 1)
        }else{
           newArray.pop() ;
        }
    }

    if (newArray.length !== 0) {
        newArray.forEach(items => {console.log(items)} )
    }
    else{
        console.log("Empty")
    }
}

Solve(['add', 
'add', 
'remove', 
'add', 
'add']

)