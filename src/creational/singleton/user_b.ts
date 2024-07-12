import { MyUserModule } from './db/my-database-module'
import { userA } from './user_a'

const userB = MyUserModule
userB.add({ name: "Carla", age: 41 })
userB.add({ name: "Bruno", age: 12 })
userB.show()

export { userB }