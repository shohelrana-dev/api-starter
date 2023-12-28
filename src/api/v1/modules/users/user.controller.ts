import { controller, httpGet } from 'inversify-express-utils'

@controller('/users')
export default class UserController {
    @httpGet('/')
    public index() {
        return [{ name: 'Shohel Rana', age: 25 }]
    }
}
