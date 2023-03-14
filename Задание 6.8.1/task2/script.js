const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const input = prompt('Ввод нформации')
consoleLog.addEventListener('click', () => {
    prompt('Служит для ввода информации');
})