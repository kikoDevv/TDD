import { convertToUpperCase } from './convertToUpperCase.js';

const convertButton = document.querySelector('#convert-btn');
const inputField = document.querySelector('input');
const resultDisplay = document.querySelector('#result-text');

//Handelers
const convertHandeler = () => {
  const inputText = inputField.value;
  const upperCaseText = convertToUpperCase(inputText);
  console.log(upperCaseText);
  resultDisplay.textContent = upperCaseText;
  inputField.value = '';
};

// Event listener 
convertButton.addEventListener('click', convertHandeler);
