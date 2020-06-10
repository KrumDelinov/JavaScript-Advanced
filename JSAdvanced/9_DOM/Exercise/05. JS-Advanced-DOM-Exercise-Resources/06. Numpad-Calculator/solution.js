function solve() {

    [...document.querySelector('div.keys').querySelectorAll('button')].forEach( e => {
        e.addEventListener('click', onClick);
    });

    document.querySelector('button.clear').addEventListener('click', onClick);

    let expresion = '';
    let result = 0;
    let firstOprant;
    let secondOperant;
    let sighn;
    function onClick(e) {

        const input = e.target.value;

       
        let screen = document.getElementById('expressionOutput');
        let screenResult = document.getElementById('resultOutput');

        if (input === 'Clear') {
            expresion = '';
            result = '';
            screenResult.textContent = '';
            screen.textContent = '';
        
            return;
        }
        else if(input === '='){
            const array = expresion.split(sighn);

            firstOprant = Number(array[0]);
            secondOperant = parseFloat(array[1]) ;

          
            if (sighn === '+') {
                result = firstOprant + secondOperant;
            }
            else if(sighn === '-'){

                result = firstOprant - secondOperant;
            }

            else if(sighn === '*'){
                result = firstOprant * secondOperant;

            }
            else if(sighn === '/'){
                result = firstOprant / secondOperant;

            }
             
            screenResult.textContent = result;
        }

        else if (input === '+' || input === '-' || input === '*' || input === '/') {
            sighn = input;
            expresion += ' ' + input + ' ';
            screen.textContent = expresion;
        }else{
            expresion += input;
            screen.textContent = expresion;
        }

     }
    
}