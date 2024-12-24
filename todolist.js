let listDOM = document.querySelector('#list')

function newElement() {
    let inputValue = document.getElementById('task').value;
    let liDOM = document.createElement('li');
    liDOM.innerHTML = inputValue;
    listDOM.appendChild(liDOM)
    document.getElementById("task").value = " ";
}
