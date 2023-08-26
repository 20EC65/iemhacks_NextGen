import User from '../model/user.js';
import CRUDRepository from './CRUDRepository.js';
class UserRepository extends CRUDRepository {
   constructor() {
    super(User)
   }

   async create(data) {
      try {
         const user = await User.create(data);
         return user;
      } catch (error) {
         throw error;
      }
   }
   async getByCustom (data) {
      try {
         const user = await User.find(data);
         return user;
      } catch (error) {
         throw error;
      }
   }

   async getWithReport (userId) {
      try {
         const user = await User.findById(userId).populate({path:'bloodReport'});
         return user;
      } catch (error) {
         throw error;
      }
   }
}

export default UserRepository;