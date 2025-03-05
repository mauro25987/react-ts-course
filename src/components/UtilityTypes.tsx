type User = {
  name: string
  surname: string
  age: number
  email: string
  password: string
}

type UserWithoutPassword = Omit<User, 'password'> // Omite campos -- omitir varios campos con union types

type UpdateUser = Partial<User> // convierte todos los campos en opcionales

type UserPublic = Pick<User, 'name' | 'email'> // Selecciona campos

// type OptionalUserWithoutPassword = Partial<UserWithoutPassword>
type OptionalUserWithoutPassword = Partial<Omit<User, 'password'>>

type Status = 'active' | 'inactive' | 'pending' | 'banned' | 'archived' | 'deleted'

type AllowedStatus = Exclude<Status, 'banned' | 'archived' | 'deleted'> // Excluye campos

const user: UserWithoutPassword = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  email: 'hola@hola.com',
}

const updateUser: UpdateUser = {
  name: 'Mauro',
  surname: 'Gonzalez',
  age: 20,
}

const userPublic: UserPublic = {
  name: 'Test',
  email: 'test@test.com',
}

const optionalUserWithoutPassword: OptionalUserWithoutPassword = {
  name: 'Mauro',
}

const status: AllowedStatus = 'active'

console.log(user.name, user.surname, user.age, user.email)
console.log(updateUser.name)
console.log(userPublic.name, userPublic.email)
console.log(optionalUserWithoutPassword.name)
console.log(status)
