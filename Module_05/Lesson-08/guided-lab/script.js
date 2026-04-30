const dog = { 
    name: "Buddy", 
    age: 3, 
    breed: "Golden Retriever" 
}

const display = document.getElementById("objects");

display.innerHTML = dog.name + " , " + dog.age + " , " + dog.breed;

const cars = document.getElementById("car");

const car = {
    make: "Jeep",
    model: "Wrangler",
    year: 2020,
    color: "Black"
}

cars.innerHTML = `${car.make}, ${car.model}, ${car.year}, ${car.color}`;