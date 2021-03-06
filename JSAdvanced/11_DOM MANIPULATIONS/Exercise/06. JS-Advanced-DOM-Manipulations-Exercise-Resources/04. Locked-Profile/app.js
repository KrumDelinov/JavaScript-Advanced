function lockedProfile() {

    document.querySelector('main').addEventListener('click', onClick);

    function onClick(e) {


        if (e.target.nodeName === 'BUTTON') {
            const parent = e.target.parentNode;

            let radio = document.querySelector('input[type="radio"]:checked').value;

           
            if (radio === 'lock') {
                return;
            }
            let hiddenField = [...parent.querySelectorAll('div')].filter(d => d.id.includes('HiddenFields'))[0];

            if (hiddenField.style.display === 'none') {
                hiddenField.style.display = 'block';

                e.target.textContent = 'Hide it';
            } else {
                hiddenField.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }

    }

}