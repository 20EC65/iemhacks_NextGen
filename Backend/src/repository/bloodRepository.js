import BloodReport from "../model/BloodReport.js";
import CRUDRepository from './CRUDRepository.js'
class BloodRepository extends CRUDRepository{
    constructor () {
        super(BloodReport);
    }
}

export default BloodRepository;