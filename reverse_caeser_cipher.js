{
  const rev_cs_input = document.querySelector('#reverse-caeser-cipher-input');
const rev_cs_output = document.querySelector('#reverse-caeser-cipher-output');
// let rev_str = '';

rev_cs_input.addEventListener('input', (e)=>{
  // console.log(input.value)
  // console.log(e.data)
  // str += e.data
  // console.log(str)
  rev_cs_output.textContent = rev_rot13(rev_cs_input.value)
})
// a = 97 m = 109 n = 109 z = 122
console.log('z'.charCodeAt())

function rev_rot13(str) {
    const regex = /[A-Z]/ig
  
    const splString = str.split('')
  
    let rev_charcode_arr = []
  
    for(let i = 0; i < splString.length; i++){
      if(splString[i].match(regex)){
        if(splString[i].charCodeAt() >= 97 && splString[i].charCodeAt() <= 109){
          rev_charcode_arr.push(`${splString[i].charCodeAt()+13}`)
        }else if(splString[i].charCodeAt() >= 109 && splString[i].charCodeAt() <= 122){
          rev_charcode_arr.push(`${splString[i].charCodeAt()-13}`)
        }else

        if(splString[i].charCodeAt() > 77 && splString[i].charCodeAt() <= 90){
          rev_charcode_arr.push(`${splString[i].charCodeAt()-13}`)
        }else{
          rev_charcode_arr.push(`${splString[i].charCodeAt()+13}`)
        }
        
      }else{
        rev_charcode_arr.push(splString[i])
      }
    }
  
    let rev_rot13_str = ''
  
    for(let i = 0; i < rev_charcode_arr.length; i++){
      if(splString[i].match(regex)){
        rev_rot13_str += String.fromCharCode(Number(rev_charcode_arr[i]))
      }else{
        rev_rot13_str += rev_charcode_arr[i]
      }
    }
  
    // console.log(rev_charcode_arr)
    console.log(rev_rot13_str)
  
    return rev_rot13_str;
  }

}
  
  // rot13("SERR PBQR PNZC");
  // rot13("SERR CVMMN!")



                                            /** My Thought Process */

/**
 * I defined a regular expression rule to match only uppercase and lowercase aphabets, rejecting all other characters

I splitted the string argument into an array of characters

I created an empty array.

Iterating though each entity in the array, each element is tested in a "if" statement, against the regex rule specified

If an entity fails, the entity itself is appended to the empty array created

If the entity passes, it is again tested if the character code equivalent of the enetity is within the range of the characters "A" to "N" (character code 65 to 77)

If the entity is within the range of characters "A" to "N", the number 13 is added to its character code value, if not the number 13 is subtracted instead from its character code value to reverse the sequence and the values of both cases are also pushed into the empty array for each entity satisfying their condition.

I then created an empty string

Iterating through each entity in the previously empty array (now filled with values from the previous iteration), each eneity is tested in a "if" statement against the regex rule specified again

If the element passes, it is converted from a number string value into a Number integer, and the value of this integer is now converted back to a character and added to the empty string previously created, at any point the entity being tested is "truthy"

If the element fails the regex rule test (Meaning that is is not an alphanumeric character) it is appended as it is at any point which the eneity being tested is "falsy"
 */