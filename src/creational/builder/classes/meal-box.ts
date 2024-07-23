import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export class MealBox implements MealCompositeProtocol {
  private _children: MealCompositeProtocol[] = []
  
  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0)
  }
  
  add(...meals: MealCompositeProtocol[]): void {
    meals.forEach(item => this._children.push(item)) 
  }
}