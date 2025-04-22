function sumNumbers(a, b) {
  return a + b;
}

console.log("Вітаю! Ця програма обчислює суму  двох чисел.");

const number1 = parseFloat(prompt("Введіть перше число:"));
const number2 = parseFloat(prompt("Введіть друге число:"));


const result = sumNumbers(number1, number2);

console.log(`Сума чисел ${number1} і ${number2} дорівнює ${result}.`);
alert(`Сума чисел ${number1} і ${number2} дорівнює ${result}.`);
