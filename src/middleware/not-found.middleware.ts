//dependencies
import { Request, Response, NextFunction } from 'express'
import NotFoundException from "@/exceptions/NotFoundException"

export default async function notFoundMiddleware( _: Request, __: Response, next: NextFunction ) {
    next( new NotFoundException( 'The route is not available' ) )
}