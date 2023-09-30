function trip(input) {
  const days = Number(input[0]);
  const typePlace = input[1];
  const opinion = input[2];
  const RoomForOnePerson = 18;
  const Apartment = 25;
  const PresidentApartment = 35;
  let TotalPrice = 0;

  if (typePlace === "room for one person") {
    TotalPrice = (days - 1) * RoomForOnePerson;
  } else if (typePlace === "apartment") {
    TotalPrice = (days - 1) * Apartment;
    if (days < 10) {
      TotalPrice *= 0.7;
    } else if (days >= 10 && days <= 15) {
      TotalPrice *= 0.65;
    } else {
      TotalPrice *= 0.5;
    }
  } else if (typePlace === "president apartment") {
    TotalPrice = (days - 1) * PresidentApartment;
    if (days < 10) {
      TotalPrice *= 0.9;
    } else if (days >= 10 && days <= 15) {
      TotalPrice *= 0.85;
    } else {
      TotalPrice *= 0.8;
    }
  }

  if (opinion === "positive") {
    TotalPrice *= 1.25;
  } else {
    TotalPrice *= 0.9;
  }
  console.log(TotalPrice.toFixed(2));
}

trip(["14", "apartment", "positive"]);
