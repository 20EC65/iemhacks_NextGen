import ProfessionalService from '../service/professionalService.js';

const profService = new ProfessionalService();

const create = async (req, res) => {
    try {
        const newProf = await profService.create(req.body);
        return res.status(201).json({
            data: newProf,
            success: true,
            message: 'Successfully created the Professional Profile',
            err: {}
        });
    } catch (error) {
        throw error;
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Something went wrong!',
            err: {}
        });
    }
}

const getAllProfessional = async (req, res) => {
    try {
        const allProfessional = await profService.getAll();
        return res.status(200).json({
            data: allProfessional,
            success: true,
            message: 'Something went wrong!',
            err: {}
        });
    } catch (error) {
        throw error;
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Something went wrong!',
            err: {}
        });
    }
}

export{
    create,
    getAllProfessional
}