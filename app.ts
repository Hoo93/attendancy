import express from 'express'
import { Database } from './src/dbms/database'
import { Dbconfig } from './src/dbms/database.option'
import userRouter from './src/User/user.route'
import cookieParser from 'cookie-parser'
import ErrorHandler from './src/errorHandler'

export class App {
  private readonly app: express.Application

  constructor(port: number, dbconfig: Dbconfig) {
    Database.initialize(dbconfig)
    this.app = express()
    this.initializeMiddleware()
    this.initializeRouter()
    this.listen(port)
  }

  private initializeMiddleware() {
    this.app.use(express.json())
    this.app.use(cookieParser())
    this.app.use(ErrorHandler)
  }

  private initializeRouter() {
    this.app.use('/user', userRouter)
  }

  private listen(port: number) {
    this.app.listen(port, () => {
      console.log('######################################')
      console.log(`##### server is running on ${port} ######`)
      console.log('######################################')
    })
  }
}
