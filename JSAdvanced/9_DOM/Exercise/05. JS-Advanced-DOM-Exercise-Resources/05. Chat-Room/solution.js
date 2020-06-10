function solve() {
document.querySelector('button').addEventListener('click', onClick);
   

   function onClick() {
      
      var chatInput = document.querySelector('#chat_input');

      let input = chatInput.value;

      var divChatMasage = document.querySelector('#chat_messages');

      const div = document.createElement('div');

      div.setAttribute('class','message my-message');
      div.innerText += input;
      divChatMasage.appendChild(div);


      chatInput.value = '';
   }

}


