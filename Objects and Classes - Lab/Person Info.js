let person = {
  firstName: "Peter",
  lastName: "Pan",
  age: 25,
  sayHello: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

// console.log(person.sayHello());

// console.log(Object.keys(person));
// console.log(Object.values(person));

const items = Object.entries(person);

for (let i = 0; i < items.length; i++) {
  console.log(items[i].join(" ") + ` ${i} number of items tuple`);
}
