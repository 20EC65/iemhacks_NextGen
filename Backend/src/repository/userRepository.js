import User from '../model/User.js';
import CRUDRepository from './CRUDRepository.js';
class UserRepository extends CRUDRepository {
   constructor() {
    super(User)
   }
}

export default UserRepository;