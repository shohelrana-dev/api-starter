import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export default async function deserializeUserMiddleware(
    req: Request,
    _: Response,
    next: NextFunction
) {
    let jwt_token = ''
    const { access_token } = req.cookies
    const { authorization } = req.headers

    req.auth = {
        isAuthenticated: false,
        user: {},
    }

    if (authorization) {
        jwt_token = authorization.split(' ')[1]
    } else if (access_token) {
        jwt_token = access_token
    } else {
        return next()
    }

    try {
        const decoded = jwt.verify(jwt_token, process.env.JWT_SECRET!)

        if (decoded) {
            //set authorised user
            req.auth.isAuthenticated = true
            req.auth.user = decoded
        }
    } catch (err: any) {
        console.error('Error verifying JWT:', err.message)
    }
    next()
}
