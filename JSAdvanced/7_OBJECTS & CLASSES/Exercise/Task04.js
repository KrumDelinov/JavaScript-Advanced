function solve(input = []) {

    const catalogue = {};

    for (const iterator of input) {
        let [product, price] = iterator.split(" : ");
        let letter = product[0];

        if (catalogue.hasOwnProperty(letter) === false) {
            catalogue[letter] = {};
        }
        catalogue[letter][product] = Number(price);
        
    }

     function sortObject(obj) {
        return Object.keys(obj).sort().reduce(function (result, key) {
            result[key] = obj[key];
            return result;
        }, {});
    }

    let sorted = sortObject(catalogue)

    for (let key in sorted) {
        console.log(key)
        const element =Object.keys(catalogue[key]).sort((a, b) => a.localeCompare(b))
       
        
        for (let product of element) {
            console.log(` ${product}: ${catalogue[key][product]}`)
        }
    } 
    
  
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)