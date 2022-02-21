/** This is a simple program that converts a single english word to Pig Latin */

const pig_latin_input = document.querySelector('#pig_latin_input');
const pig_latin_output = document.querySelector('#pig_latin_output');

pig_latin_input.addEventListener('input', ()=>{
  let output_holder = '';
  if(pig_latin_input.value != ''){
    const input_holder = pig_latin_input.value.split(" ")
    input_holder.map(each => output_holder += translatePigLatin(each) + ' ')
    pig_latin_output.textContent = output_holder;
  }else{
    pig_latin_output.textContent = ''
  }
  
})

function translatePigLatin(str) {
    const regex = /[a,e,i,o,u]/
    const vowel = str.match(regex)
    const strArray = str.split("")
  
  
    if(regex.test(str[0]) === true){
      console.log("First Block")
      const indexOfVowel = str.indexOf(vowel[0])
      let spliceConsonant = strArray.splice(0, indexOfVowel)
      console.log(spliceConsonant)
      strArray.push(...spliceConsonant)
      console.log(regex.test(str[0]))
      strArray.push("w","a","y")
      const joinedStr = strArray.join("")
      console.log(joinedStr)
      return joinedStr;
    }
    else if(regex.test(str) === false){
        console.log("Second block")
        strArray.push("a","y")
        const joinedStr = strArray.join("")
        console.log(joinedStr)
        return joinedStr;
    }
    else if(regex.test(str[0]) === false){
      console.log("Third Block")
      const indexOfVowel = str.indexOf(vowel[0])
      let spliceConsonant = strArray.splice(0, indexOfVowel)
      console.log(spliceConsonant)
      strArray.push(...spliceConsonant)
      strArray.push("a","y")
      const joinedStr = strArray.join("")
      console.log(joinedStr)
      return joinedStr;
    }
  
}
  
  // translatePigLatin("consonant");
  // translatePigLatin("glove")
  // translatePigLatin("algorithm")
  // translatePigLatin("rhythm")
  // translatePigLatin("eight")