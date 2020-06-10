function solve(input = []) {
    
    const system = {};
    
    for (const iterator of input) {
        let [systemName, componentName, subcomponentName] = iterator.split(" | ");

        
        if (system.hasOwnProperty(systemName) === false) {
            system[systemName] = {};
            

           
        }
        if (system[systemName].hasOwnProperty(componentName) === false) {
            system[systemName][componentName] = [];
        }

        system[systemName][componentName].push(subcomponentName);

     
    }

    Object.entries(system).sort((a, b) => {
         return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0])
        }).forEach(([systemName, componentName]) => {

            console.log(systemName);

            Object.entries(componentName).sort((a, b) => b[1].length - a[1].length)
            .forEach(([name, subcomponentName]) => {
                console.log("|||" + name);

                subcomponentName.forEach(c => {
                    console.log("||||||" + c);
                })

            })

        });
 
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
)