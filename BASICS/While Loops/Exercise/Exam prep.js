
function ExamPreparation(input) {
  let failsAllowed = Number(input[0]);
  let index = 1
  let countFails = 0
  let GradesSum = 0
  let gradesCount = 0

  while(countFails < failsAllowed) {
    let examName = input[index];
    if (examName == "Enough") {
      break;
    }

    let grade = Number(input[index+1]);
    GradesSum += grade
    gradesCount++
    index += 2

    if (grade <= 4) {
      countFails++
    }
  }
  if (countFails == failsAllowed) {
    console.log(`You need a break, ${countFails} poor grades.`)
  } else {
    let averageScore =  GradesSum / gradesCount
    let lastProblem = input[index-2]

    console.log(`Average score: ${averageScore.toFixed(2)}`)
    console.log(`Number of problems: ${gradesCount}`)
    console.log(`Last problem: ${lastProblem}`)
  }
}

ExamPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])