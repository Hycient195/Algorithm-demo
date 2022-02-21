const word_input = document.querySelector('#word_input');
const binary_output = document.querySelector('#binary_output');

word_input.addEventListener('input', ()=>{
  // console.log('hello')
  binary_output.textContent = stringToBinary(word_input.value)
})
// binary_output


// console.log(holder)
function stringToBinary(str) {
  let holder = '';
  const words = str.split('') 
  console.log(words)
  // return words.map(word => String.fromCharCode(parseInt(word, 2))).join("")
  words.map(word => holder += word.charCodeAt().toString(2) + ' ')
  console.log(holder)
  return holder;
  // holder += str.charCodeAt().toString(2) + ''
  // return holder;
}

// console.log(binaryToString("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))