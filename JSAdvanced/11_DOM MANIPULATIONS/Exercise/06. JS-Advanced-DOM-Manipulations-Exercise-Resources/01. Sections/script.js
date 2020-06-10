function create(words) {


   let divContent = document.getElementById('content');


   for (let index = 0; index < words.length; index++) {
      const element = words[index];

      let div = document.createElement('div');
      let p = document.createElement('p');
      let atr = p.style.setProperty('display', 'none');

      p.textContent = element;

      div.appendChild(p);
      divContent.appendChild(div);

      div.addEventListener('click', onClick);

      function onClick(e) { 
      
         const div = e.currentTarget;

         const p = div.firstChild;
         p.style.removeProperty('display')
       
      }
      
   }
   
}