function solve() {


    document.querySelector('button').addEventListener('click', onClick);

    function onClick() {
        var inputeArt = document.querySelector('input');
        let input = inputeArt.value;
    
        var ol = document.querySelector('ol');
    
    
        let nameToInput = input[0].toUpperCase() + input.slice(1).toLowerCase();
    
        let firstLetterCode = input[0].toUpperCase().charCodeAt(0);
    
        let tableIndex = firstLetterCode - 65;
    
        let li = document.getElementsByTagName('li')[tableIndex];

        if (li.textContent === '') {
             li.innerText = nameToInput;
        }else{
    
            li.innerText +=`, ${nameToInput}` ;
        }
        inputeArt.value = '';
    }
}