function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const textInput = document.querySelector("#inputs textarea").value;
      const bestRestOutput = document.querySelector('#outputs #bestRestaurant p')
      const bestWorkersOutput = document.querySelector('#workers p')
      let bestSalary = 0;
      let bestAverageSalary = 0;
      let bestWorkers = 0;
      let bestRestaurantName = 0;

      let data = JSON.parse(textInput);
      for(let el of data){ 
         let trimmed = el.replaceAll(',', '').split(' ')
         const restaurantName = trimmed[0];
         const salaries = trimmed.filter(Number).map(Number);
         const averageSalary = salaries.reduce((a, b) => a + b) / salaries.length;
         const biggestSalary = Math.max(...salaries);
         const workers = trimmed.slice(2);
         
         if(averageSalary > bestAverageSalary) {
            bestSalary = biggestSalary;
            bestAverageSalary = averageSalary;
            bestWorkers = workers;
            bestRestaurantName = restaurantName;
         } 
      }
      bestRestOutput.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      let workersOuput = [];
      for(let i = 0; i < bestWorkers.length; i += 2) {
         workersOuput.push(`Name: ${bestWorkers[i]} With Salary: ${bestWorkers[i+1]}`);
      }
      bestWorkersOutput.textContent = workersOuput.join(' ');
      console.log(bestRestOutput.textContent.trim())
   }
}


document.body.innerHTML = `
    <section class="restaurant-race-class">
        <div id="inputs">
            <h2>Add workers</h2>
            <textarea></textarea>
            <br>
            <button type="submit" id="btnSend">Send</button>
        </div>
        <div id="outputs">
            <div id="bestRestaurant">
                <h2>Best Restaurant</h2>
                <p></p>
            </div>
            <div id="workers">
                <h2>Best Restaurant's workers</h2>
                <p></p>
            </div>
        </div>
    </section>
`;

result();

let textarea = document.querySelector("#inputs textarea");
let button = document.querySelector("button#btnSend");

let bestRestaurantP = document.querySelector("#outputs #bestRestaurant p");
let bestWorkersP = document.querySelector("#outputs #workers p");

textarea.value = '["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]';
button.click();

let actualResultRestuarant = bestRestaurantP.textContent.trim();
let expectedRestaurant = "Name: TheLake Average Salary: 913.33 Best Salary: 1300.00";

assert.equal(actualResultRestuarant, expectedRestaurant, "The restaurant information about average salary and best salary is invalid.");

let actualBestWorkers = bestWorkersP.textContent.trim();
let expectedBestWorkers = "Name: Bob With Salary: 1300 Name: Joe With Salary: 780 Name: Jane With Salary: 660";

assert.equal(actualBestWorkers, expectedBestWorkers, "The best workers paragraph is invalid");
