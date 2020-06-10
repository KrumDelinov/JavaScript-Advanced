function solve(input = []) {

    const car = {};

    for (const iterator of input) {
        let [carBrand, carModel, producedCars] = iterator.split(" | ");

        if (car.hasOwnProperty(carBrand) === false) {
            car[carBrand] = {}
        }

        if (car[carBrand].hasOwnProperty(carModel)) {

            car[carBrand][carModel] += Number(producedCars);
        }else{car[carBrand][carModel] = Number(producedCars);}

        
        
    }

    for (const key in car) {
        if (car.hasOwnProperty(key)) {
            const element = car[key];
            console.log(key);

            for (const model in element) {
                if (element.hasOwnProperty(model)) {
                    const price = element[model];
                    console.log(`###${model} -> ${price}`)
                }
            }
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)