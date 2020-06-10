function delimiterPrint(array) {

    
    let delimiter = array.pop();

    

    console.log(array.join(delimiter))

    
}

delimiterPrint(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
)