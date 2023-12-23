import { injectable } from 'inversify'

@injectable()
export default class UserService {
    hello() {
        return 'hello from user service'
    }
}
