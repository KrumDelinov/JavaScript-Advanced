function toggle() {
 
    const div = document.querySelector('#extra');

    const btn = document.getElementsByClassName("button")[0];

    if (div.style.display === 'block') {
        div.style.display ='none';
        btn.textContent = 'More';
    }else{
        btn.textContent = 'Less';
        div.style.display ='block';
    }
}