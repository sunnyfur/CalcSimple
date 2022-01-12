const isNotNumbers = (a, b) => {
    if (!isNaN(a) && !isNaN(b)) {
        return false;

    } else {
        return "Одно из введенных значений не является числом"
    };
};

const sum = (a, b) => isNotNumbers(a, b) || a + b;

const sub = (a, b) => isNotNumbers(a, b) || a - b;

const mul = (a, b) => isNotNumbers(a, b) || a * b;

const div = (a, b) => isNotNumbers(a, b) || (b == 0) ? "Ошибка: деление на 0" : false || a / b;


const getRezult = () => {
    let firstNumber = Number(document.getElementById("idFirstNumber").value);
    let secondNumber = Number(document.getElementById("idSecondNumber").value);
    let rez = document.getElementById('idRezult');
    let operations = document.getElementsByClassName('operation_radio');
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].checked) {
            switch (operations[i].value) {
                case 'sum':
                    rez.value = sum(firstNumber, secondNumber);
                    break;
                case 'sub':
                    rez.value = sub(firstNumber, secondNumber);
                    break;
                case 'mul':
                    rez.value = mul(firstNumber, secondNumber);
                    break;
                case 'div':
                    rez.value = div(firstNumber, secondNumber);
                    break;
            }
        }
    }
}