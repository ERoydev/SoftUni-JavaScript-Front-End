function receiver(arr) {
  let cats = [];
  class Cat {
    constructor(catName, age) {
      this.catName = catName;
      this.age = age;
    }

    meow() {
      console.log(`${this.catName}, age ${this.age} says Meow`);
    }
  }

  for (let el of arr) {
    let [name, age] = el.split(" ");

    const cat = new Cat(name, age);
    cats.push(cat);
  }

  for (const cat of cats) {
    cat.meow();
  }
}

receiver(["Candy 1", "Poppy 3", "Nyx 2"]);
