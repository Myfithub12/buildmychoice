//Object Info

const person = new Object();
    person.name = "Mark Hollrah",
    person.age = 48,
    person.job = "Unemployed"

    document.getElementById("name").textContent = `Name: ${person.name}`;
    document.getElementById("age").textContent = `Age: ${person.age}`;
    document.getElementById("job").textContent = `Job: ${person.job}`;

//Array Info

const fruits = ["Apple", "Banana", "Grapes"];

const fruitList = document.getElementById("fruit-list");

fruits.forEach(fruit => {
  const li = document.createElement("li");
  li.textContent = fruit;
  fruitList.appendChild(li);
});
