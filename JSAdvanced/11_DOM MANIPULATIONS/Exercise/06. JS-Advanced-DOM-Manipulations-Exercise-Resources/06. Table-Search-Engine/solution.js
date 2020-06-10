function solve() {

   let inputText = document.querySelector('#searchField');

   let table = document.querySelector('tbody')

   document.querySelector('#searchBtn').addEventListener('click', search);
   

   function search(e){
    
      Array.from(table.rows).forEach(row => {

         if(row.textContent.toLowerCase().includes(inputText.value.toLowerCase())){
            row.classList.add('select');
         }else{
            row.classList.remove('select');
         }
    
      })

      inputText.value = '';
   }

}