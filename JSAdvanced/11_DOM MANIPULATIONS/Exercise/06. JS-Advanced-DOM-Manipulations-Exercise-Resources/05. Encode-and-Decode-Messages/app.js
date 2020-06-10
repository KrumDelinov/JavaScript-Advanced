function encodeAndDecodeMessages() {

    let main =document.querySelector('#main');

    let lastInput = '';

    main.addEventListener('click', encode);

    function encodeString(input = String) {

        let result = '';
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            
            let charNumber = element.charCodeAt(0) ;
            let letter = String.fromCharCode(charNumber + 1)
            result += letter;
        }

        return result;
    }

    function decodeString(input = String) {
        let result = '';
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            
            let charNumber = element.charCodeAt(0) ;
            let letter = String.fromCharCode(charNumber - 1)
            result += letter;
        }

        return result;
    }
    
    

    function encode(e){

        let divEncode = main.firstElementChild;
        let divDecode = main.lastElementChild;
        let pEncode = divEncode.querySelector('textarea');
        let pDecode = divDecode.querySelector('textarea');
        let inputEncode = pEncode.value;
        let inputDecode = pDecode.value;
        

        if (e.target.nodeName === 'BUTTON') {
            const parent = e.target.parentNode;

            const btn = e.target.textContent;

            if (btn === 'Encode and send it') {
                inputEncode = pEncode.value;

                lastInput = inputEncode;
                pDecode.innerText = encodeString(inputEncode);
                pEncode.value = '';
            }else if(btn === 'Decode and read it') {
                let textToEncode = inputDecode;

                if (textToEncode === lastInput) {
                    
                    return;
                }
                pDecode.innerText = decodeString(textToEncode);
            }

            
        }
        
    };

   
}