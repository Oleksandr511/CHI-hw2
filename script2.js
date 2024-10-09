const obj = {
  getData: function () {
    console.log(`Person name is: ${this.name} and age ${this.age}`);
  },
};

function func(name, age) {
    return obj.getData.bind({ name, age });
}

const person = func('John', 30);

person(); 
