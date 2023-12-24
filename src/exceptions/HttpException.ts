import { Response } from "express"

export default class HttpException extends Error {
    public statusCode: number

    constructor(message: string, statusCode?: number) {
            super(message )
            this.statusCode = statusCode || 500
    }

    public send(res: Response) {
        return res.status(this.statusCode).json({
            message: this.message || 'Something went wrong, Please try again',
            statusCode: this.statusCode
        })
    }
}