declare namespace Express {
    interface Request {
        auth: {
            user?: any
            isAuthenticated: boolean
        }
    }
}
