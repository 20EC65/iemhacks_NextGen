import UserRepository from '../repository/userRepository.js';

class UserService{
    constructor () {
        this.UserRepository = new UserRepository();
    }

    async SignUp(data) {
        try {
            const user = await this.UserRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async SignIn(phoneNumber, password) {
        try {
            const userExist = await this.UserRepository.getByCustom({phoneNumber});
            const user = userExist[0];
            if(!user) {
                throw new Error('User does not exist.')
            }
            if(!user.comparePassword(password)) {
                throw new Error('Password does not match.')
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }

    async getAllReports (userId) {
        try {
            const user = await this.UserRepository.getWithReport(userId);
            return user;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;