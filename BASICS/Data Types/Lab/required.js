
function solve(pages, readOneHour, days) {
  let totalHours = pages / readOneHour
  let hoursPerDay = totalHours / days
  console.log(hoursPerDay)
}

solve(212,
  20 ,
  2)