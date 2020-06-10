function sort(arr = []) {


    const sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(sorted.join("\n"))
    
}

sort(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

)