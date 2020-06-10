function addItem() {

    const itemText = document.getElementById('newItemText');
    const valueText = document.getElementById('newItemValue');

    let item = itemText.value;
    let value = valueText.value;

    const option = document.createElement('option');
    option.textContent = item;
    option.value = value;

    document.getElementById('menu').appendChild(option);


    itemText.value = '';
    valueText.value= '';
}