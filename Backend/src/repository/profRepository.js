import Professional from '../model/professional.js';

class ProfessionalRepository {
    async create(data) {
        try {
            const newProf = await Professional.create(data);
            return newProf;
        } catch (error) {
            throw error;
        }
    }

    async getAllProfessional () {
        try {
            const professional = await Professional.find();
            return professional;
        } catch (error) {
            throw error;
        }
    }
}

export default ProfessionalRepository;