import { MyUserModule } from './db/my-database-module'

const userA = MyUserModule
userA.add({ name: "Maria", age: 25 })
userA.add({ name: "João", age: 30 })
userA.show()

export { userA }