
function solve(nums, rotations) {
  let arrayLength = nums.length - 1

  while(rotations) {
    let firstElement = nums[0]
    nums.shift()
    nums.push(firstElement)

    rotations -= 1
  }

  console.log(nums.join(' '))
}

 


solve([51, 47, 32, 61, 21], 2)