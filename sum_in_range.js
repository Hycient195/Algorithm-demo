/**
 * We'll pass you an array of two numbers. Return the sum of 
 * those two numbers plus the sum of all the numbers between 
 * them. The lowest number will not always come first.

    For example, sumAll([4,1]) should return 10 because sum of all 
    the numbers between 1 and 4 (both inclusive) is 10.
 */

const min_range_input = document.querySelector('#min_range_input');
const max_range_input = document.querySelector('#max_range_input');
const sum_output = document.querySelector('#sum_output');
console.log(min_range_input.value)

  min_range_input.addEventListener('input', ()=>{
    const answer = sumAll([Number(min_range_input.value), Number(max_range_input.value)])
    if(min_range_input.value != 0 && max_range_input.value != 0){
      sum_output.innerHTML = `Sum of ${min_range_input.value} and ${max_range_input.value} = ${answer.sumArr} <br/> <br/>
      Sum of all numbers in-between ${min_range_input.value} and ${max_range_input.value} = ${answer.summedArrRange} <br/> <br/>
      Total sum = ${answer.totalSum}`
    }else{
      sum_output.innerHTML = '';
    }
    
  })
  
  max_range_input.addEventListener('input', ()=>{
    const answer = sumAll([Number(min_range_input.value), Number(max_range_input.value)])
    if(min_range_input.value != 0 && max_range_input.value != 0){
      sum_output.innerHTML = `Sum of ${min_range_input.value} and ${max_range_input.value} = ${answer.sumArr} <br/> <br/>
      Sum of all numbers in-between ${min_range_input.value} and ${max_range_input.value} = ${answer.summedArrRange} <br/> <br/>
      Total sum = ${answer.totalSum}`
    }else{
      sum_output.innerHTML = ''
    }   
  })

    function sumAll(arr) {
        /** Summing the two numbers in the given array */
        const sumArr = arr[0] + arr[1];
      
        /** Sorting the array to ensure that the lowest number comes first */
        const sortedArr = arr.sort((a, b)=> a - b );
      
        /** Obtaining an array containing all the numbers between the two gven numbers */
        let arrRange = [];
        let sortedMinArrPlusOne = sortedArr[0] + 1
        for(let i = sortedArr[0]; i < sortedArr[1] - 1; i++){
          arrRange.push(sortedMinArrPlusOne++);
        }
      
        /** Adding all the numbers between the two given numbers */
        let summedArrRange = 0;
        for(let i = 0; i < arrRange.length; i++){
          summedArrRange += arrRange[i];
        }
      
        /** Summing the sum of the two numbers and the range of numbers between them */
        const totalSum = sumArr + summedArrRange;
      
        console.log(totalSum) // Printing the final answer
        // return totalSum;
        return{ sumArr, summedArrRange, totalSum }
      }
      
      // sumAll([4, 9]);
      
      
      /**<================ Thought Process ===============> */
      
      // Create a variable and store the value of the sum of the two numbers
      
      // Arrange the two numbers that the smaller one comes first
      
      // Create anothe variable and store the value of the sum of all the numbers betwen the two nubers. A for loop should be used for this