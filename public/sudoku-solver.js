const textArea = document.getElementById('text-input');
import { puzzlesAndSolutions } from './puzzle-strings.js';

document.addEventListener('DOMContentLoaded', () => {
  // Load a simple puzzle into the text area
  textArea.value = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
 
});

/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/
const isInputNum = input => /^[1-9]$/.test(input);

const parseToObj = input => {
  if(input.length == 81){
    let res = {};
    let alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    let i = 0;
    for(let row = 1; row<10; row++){
      for(let col = 1; col<10; col++){
        res[`${alph[row-1]}${col}`] = input[i]
        i++;
      }
    }
    return res;
  } else return false;
}

const isValidInput = input => (input.length !== 81) && (document.getElementById('error-msg').innerText = "Error: Expected puzzle to be 81 characters long.");

const isValidSudk = sudoku => {
  if(sudoku.length !== 81){
    return false;
  }
  // vertical
  
}

try {
  module.exports = {
    isInputNum,
    parseToObj,
    isValidInput,
    isValidSudk,
  }
} catch (e) {}

/**
 * 
 * function fillTable(){
  let td = document.getElementsByClassName('sudoku-input');
  let input = textArea.value;
  for(let i in td){
    if(td[i].toString() == '[object HTMLInputElement]')
     td[i].value = !isNaN(input[i]) ? (input[i]=='.' ? '' : input[i]) : '';
  }
}

function tdChange(){
  let td = document.getElementsByClassName('sudoku-input');
  for(let i in td){
    td[i].toString() == '[object HTMLInputElement]' && td[i].addEventListener('input', e => {
      if(!isNaN(e.target.value))
        document.getElementById('text-input').value = getInput(i, e.target.value);
    })
  }
}

function getInput(index, value){
  let res = textArea.value.split('');
  if(index > res.length){
    for(let i = res.length; i < index; i++)
      res[i] = '.';
  }
  res[index] = value;
  return res.join(''); 
}

window.onInputChange = () => fillTable();

window.solve = () => {
  if(textArea.value.length !== 81){
    return document.getElementById('error-msg').innerHTML = 'Error: Expected puzzle to be 81 characters long.';
  }
  puzzlesAndSolutions.map(p => {
    if(p[0] == textArea.value.toString()){
      textArea.value = p[1];
      return fillTable();
    }
  })
}

window.clear = () => {
  textArea.value = "";
  fillTable();
}
 textArea.value = puzzlesAndSolutions[0][0]
  fillTable();
  tdChange();
 * 
 * 
 */