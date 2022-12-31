const greenBarsOne = document.querySelectorAll('.form-one .flex-element');
greenBarsOne[0].style.backgroundColor = "green";
const greenBarsTwo = document.querySelectorAll('.form-two .flex-element');
greenBarsTwo[0].style.backgroundColor = "green";
const greenBarsThree = document.querySelectorAll('.form-three .flex-element');
greenBarsThree[0].style.backgroundColor = "green";

let first = 'с новым счастьем!';
let second = 'много новых достижений, крепкого здоровья и любви, пусть задуманное сбудется.';
let third = 'Новый год принесет много радостных и счастливых дней!';

for (const greenBar of Array.from(greenBarsOne)) {
  const checkbox = greenBar.querySelector('input');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      Array.from(greenBarsOne).forEach((elem) => elem.style.backgroundColor = "");
      greenBar.style.backgroundColor = "green";
      first = checkbox.value;
    }
  });
}

for (const greenBar of Array.from(greenBarsTwo)) {
  const checkbox = greenBar.querySelector('input');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      Array.from(greenBarsTwo).forEach((elem) => elem.style.backgroundColor = "");
      greenBar.style.backgroundColor = "green";
      second = checkbox.value;
    }
  });
}

for (const greenBar of Array.from(greenBarsThree)) {
  const checkbox = greenBar.querySelector('input');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      Array.from(greenBarsThree).forEach((elem) => elem.style.backgroundColor = "");
      greenBar.style.backgroundColor = "green";
      third = checkbox.value;
    }
  });
}

const wish = document.querySelector('.whish');
const copyButton = document.querySelector('.copy');

setInterval(() => {wish.innerHTML = `С новым годом ${first} Я желаю ${second} И пусть ${third}`}, 500);

copyButton.addEventListener('click', () => {
  const inputValue = `С новым годом ${first} Я желаю ${second} И пусть ${third}`;
    navigator.clipboard.writeText(inputValue)
      .then(() => {
        alert(`скопировано поздравление: С новым годом ${first} Я желаю ${second} И пусть ${third}`);
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      })
});