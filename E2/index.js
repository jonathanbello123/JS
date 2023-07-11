const pizzas = [

  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },



];

console.log("Ejercicio 1: Las pizzas que tengan un id impar.")
pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log("ID " + pizza.id + " Nombre:" + pizza.nombre + " es impar")
  }
}
)

console.log("-------------------------------------------------------------------------------")




console.log(" Ejercicio 2 :  Responder: ¿Hay alguna pizza que valga menos de $600?")

pizzas.forEach((pizzaBarata) => {
  if (pizzaBarata.precio < 600) {
    console.log("la " + pizzaBarata.nombre + " vale menos de 600")
  }
}
)
console.log("-------------------------------------------------------------------------------")
console.log("Ejercicio 3: El nombre de cada pizza con su respectivo precio.")

pizzas.forEach((pizzasTodas) => {
  console.log("Nombre: " + pizzasTodas.nombre + "|" + " Precio: " + pizzasTodas.precio)
}
)
console.log("-------------------------------------------------------------------------------")
console.log("Ejercicio 4: Todos los ingredientes de cada pizza En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo")


pizzas.forEach((pizzasIngredientes) => {
  console.log("la " + pizzasIngredientes.nombre + " tiene los siguientes ingredientes: " + pizzasIngredientes.ingredientes)
}
)



