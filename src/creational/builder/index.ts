import { MainDishBuilder } from "./classes/main-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

const mainDishBuilder = new MainDishBuilder()
const meal1 = mainDishBuilder.makeMeal().makeBeverage().makeDessert()
console.log(meal1.getMeal())
console.log(meal1.getPrice())

mainDishBuilder.reset()

const meal2 = mainDishBuilder.makeMeal().makeBeverage()
console.log(meal2.getMeal())
console.log(meal2.getPrice())

const veganDishBuilder = new VeganDishBuilder()
const veganMeal = veganDishBuilder.makeMeal()
console.log(veganMeal.getMeal())
console.log(veganMeal.getPrice())