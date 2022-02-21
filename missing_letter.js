/**
 * Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.


*/

const missing_letter_input = document.querySelector('#missing_letter_input')
const missingg_letter_output = document.querySelector('#missingg_letter_output')

missing_letter_input.addEventListener('input', ()=>{
    missingg_letter_output.textContent = findTheMissingLetter(missing_letter_input.value)
})

function findTheMissingLetter(str) {

    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) !== (str.charCodeAt(0) + i)){
        return String.fromCharCode(str.charCodeAt(i)-1)
        }
    }
    return undefined;
}


  
findTheMissingLetter("abce");
findTheMissingLetter("stvwx")
findTheMissingLetter("abcdefghijklmnopqrstuvwxy") 