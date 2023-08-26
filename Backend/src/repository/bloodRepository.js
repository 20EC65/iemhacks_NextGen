import BloodReport from "../model/BloodReport.js";
import CRUDRepository from './CRUDRepository.js'
class BloodRepository extends CRUDRepository{
    constructor () {
        super(BloodReport);
    }

    async create(data) {
        try {
            const report = await BloodReport.create(data);
            return report;
        } catch (error) {
            throw error;
        }
    }
}

export default BloodRepository;