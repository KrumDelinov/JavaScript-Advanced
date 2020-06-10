function solve() {

  const [generate,bay] = [...document.querySelectorAll('button')];
  generate.addEventListener('click', onGenerate);
  bay.addEventListener('click', onBay);

  const [input, output] = [...document.querySelectorAll('textarea')];


  function onGenerate(e) {

    let table = document.getElementsByTagName('tbody')[0];

    const obj = JSON.parse(input.value);

    for (const iterator of obj) {

     
      let img = iterator.img;
      let price = iterator.price;
      let name = iterator.name;
      let decFactor = iterator.decFactor;

      let tr = document.createElement('tr');

      let imageTd = document.createElement('td');
      let image = document.createElement('img');
      image.setAttribute('src', img);
      imageTd.appendChild(image);
      tr.appendChild(imageTd);


      createTd(name, tr);
      createTd(price, tr);
      createTd(decFactor, tr);

      let checkTd = document.createElement('td');
      let input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      checkTd.appendChild(input);
      tr.appendChild(checkTd);


      function createTd(element, tr) {

        let td = document.createElement('td');
        let p = document.createElement('p');
        p.innerText = element;
        td.appendChild(p);
        tr.appendChild(td);
      };

      table.appendChild(tr);

    }

  }

  function onBay(e) {

    const tableBody = document.querySelector('tbody');
    
    const detailsName = [];
    const detailsPrise = [];
    const decFactor = [];

    let tableRows = tableBody.querySelectorAll('tr');

      Array.from(tableRows).forEach(row => {

        let isChecked = row.querySelector('input').checked;

        if (isChecked) {

          let name = row.children[1].textContent.trim();
          let price = Number(row.children[2].textContent);
          let decor = Number(row.children[3].textContent);

          detailsName.push(name);
          detailsPrise.push(price);
          decFactor.push(decor);
          
        };
        
      })

      const result = [

        `Bought furniture: ${detailsName.join(', ')}`,
        `Total price: ${(detailsPrise.reduce((a, b)=> a + b, 0)).toFixed(2)}`,
        `Average decoration factor: ${(decFactor.reduce((a, b) => a + b, 0) / decFactor.length).toFixed(2)}`
      ];

      output.value = result.join('\n');
  }
}