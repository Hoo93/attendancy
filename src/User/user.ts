export class User {
  id: string
  name: string
  password: string
  phoneNumber: string
  age?: number
  email?: string
  no?: number

  // @ts-ignore
  constructor(
    id: string,
    password: string,
    name: string,
    phoneNumber: string,
    age?: number,
    email?: string,
    no?: number
  ) {
    this.no = no
    this.id = id
    this.password = password
    this.phoneNumber = phoneNumber
    this.name = name
    this.email = email
  }
}

// export default User
