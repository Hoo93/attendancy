import { NextFunction, Request, Response } from 'express'

export function ErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err)
  res.status(500).send(err.message)
}

export default ErrorHandler
