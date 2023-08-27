import ProfessionalRepository from '../repository/profRepository.js';

class ProfessionalService{
    constructor () {
        this.ProfessionalRepository = new ProfessionalRepository();
    }
    async create(data) {
        try {
            const professional = await this.ProfessionalRepository.create(data);
            return professional;
        } catch (error) {
            throw error;
        }
    }
    async getAll() {
        try {
            const professional = await this.ProfessionalRepository.getAllProfessional();
            return professional;
        } catch (error) {
            throw error;
        }
    }
}

export default ProfessionalService;