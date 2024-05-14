const currentHour = new Date().getHours();


function getGreetingMessage(hour) {
    if (hour >= 5 && hour < 12) {
        return "Good morning!";
    } else if (hour >= 12 && hour < 18) {
        return "Good afternoon!";
    } else {
        return "Good evening!";
    }
}
const greeting = getGreetingMessage(currentHour);

alert(greeting);

let display = document.getElementById('display');
let memory= 0;

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
function deleteLastCharacter() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character from the display
}
document.getElementById('changeColor').addEventListener('click', function() {
    this.style.background="#66CDAA";
    this.style.color = 'black';



});






