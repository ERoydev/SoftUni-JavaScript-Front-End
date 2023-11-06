function solve(arr) {
  let appointments = {};
  for (let info of arr) {
    let [day, name] = info.split(" ");
    if (appointments.includes(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      appointments[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }
  for (let data in appointments) {
    console.log(`${data} -> ${appointments[data]}`);
  }
}

solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
