import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { Auth } from "@/types"

export default async function deserializeUserMiddleware( req: Request, _: Response, next: NextFunction ){
    let jwt_token            = ''
    const { access_token }   = req.cookies
    const { authorization }  = req.headers
    req.auth                 = {} as Auth
    req.auth.isAuthenticated = false
    req.auth.user            = {}

    if( authorization ){
        jwt_token = authorization.split( ' ' )[1]
    } else if( access_token ){
        jwt_token = access_token
    } else{
        return next()
    }

    try {
        const decoded = jwt.verify( jwt_token, process.env.JWT_SECRET! ) as any

        if( decoded ){
            const user               = {}
            req.auth.isAuthenticated = true
            req.auth.user            = user
        }
    } catch ( err ) {
        console.log( err.message )
    }
    next()
}