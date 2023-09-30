
function solve(nums) {
  let leftSum = 0
  let rightSum = 0;
  let isEqual = false;
  let arrayLength = nums.length;


  for(let currI = 0; currI < arrayLength; currI ++){
    for(let i = 0; i < arrayLength; i++) {
      
      if(i != currI) {
        let num = Number(nums[i]);

        if (i < currI) {
          leftSum += num
        } else if (i > currI) {
          rightSum += num;
        }


      }
    }

    if (currI === 0) {
      leftSum = 0;
    } else if (currI == arrayLength- 1) {
      rightSum = 0;
    }
  }

  if (!isEqual) {
    console.log("no")
  }
}


solve([1, 2, 3]);