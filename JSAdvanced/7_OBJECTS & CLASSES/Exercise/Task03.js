function solve(input = []) {


    const fruits = {};
    const bottels = {};

    for (const iterator of input) {
        let row = iterator.split(" => ");
        let juiceName = row[0];
        let juiceQuantity = Number(row[1]);

        
        if (fruits.hasOwnProperty(juiceName)) {
            fruits[juiceName] += juiceQuantity;


        }else{
            fruits[juiceName] = juiceQuantity;
            
        }

        
        if (fruits[juiceName] >= 1000) {

            var remainder = fruits[juiceName] % 1000 ;
            var times = (fruits[juiceName] - remainder) / 1000;

            if (bottels.hasOwnProperty(juiceName)) {

                bottels[juiceName] += times;
            }else{

                bottels[juiceName] = times;
            }
            fruits[juiceName] = remainder;
         
        }
        
    }

    for (const key in bottels) {
        if (bottels.hasOwnProperty(key)) {
            const element = bottels[key];
            console.log(`${key} => ${element}`);
        }
        
    }
}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']

)