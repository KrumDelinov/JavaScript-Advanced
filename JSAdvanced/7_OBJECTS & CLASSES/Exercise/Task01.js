function heroInventory(input = []) {
    
    let result = [];

    for (const iterator of input) {

        let [name, level, items] = iterator.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];

        result.push({name, level, items});
        
    }

    var myJson = JSON.stringify(result);
    console.log(myJson);
}

heroInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)