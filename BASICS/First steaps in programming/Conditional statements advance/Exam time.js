function exam(input) {
  const examHour = Number(input[0]);
  const examMinute = Number(input[1]);
  const arivalHour = Number(input[2]);
  const arivalMinute = Number(input[3]);

  const TotalExamMin = examHour * 60 + examMinute;
  const ArivalMin = arivalHour * 60 + arivalMinute;
  const diff = Math.abs(TotalExamMin - ArivalMin);

  const hourDiff = Math.trunc(diff / 60);
  let minDiff = diff % 60;

  if (minDiff == 0 || (minDiff < 10 && hourDiff > 0)) {
    minDiff = `0${minDiff}`;
  }

  if (ArivalMin === TotalExamMin) {
    console.log("On Time");
  } else if (ArivalMin > TotalExamMin && diff < 60) {
    console.log("Late");
    console.log(`${minDiff} minutes after the start`);
  } else if (ArivalMin > TotalExamMin && diff >= 60) {
    console.log("Late");
    console.log(`${hourDiff}:${minDiff} hours after the start`);
  } else if (diff <= 30) {
    console.log("On Time");
    console.log(`${minDiff} minutes before the start`);
  } else if (diff > 30 && diff < 60) {
    console.log("Early");
    console.log(`${minDiff} minutes before the start`);
  } else {
    console.log("Early");
    console.log(`${hourDiff}:${minDiff} hours before the start`);
  }
}

exam(["9", "30", "9", "50"]);
