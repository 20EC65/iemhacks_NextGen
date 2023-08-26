import BloodRepository from "../repository/bloodRepository.js";
import UserRepository from '../repository/userRepository.js';
class BloodService {
    constructor () {
        this.BloodRepository = new BloodRepository();
        this.UserRepository = new UserRepository();
    }

    async createReport (data, userId) {
        try {
            console.log(userId)
            const report = await this.BloodRepository.create(data);
            const user = await this.UserRepository.get(userId);
            await user.bloodReport.push(report.id);
            await user.save();
            return report;
        } catch (error) {
            throw error;
        }
    }
}

export default BloodService;
 