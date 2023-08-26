import BloodService from "../service/bloodService.js";

const bloodService = new BloodService();

const createReport = async (req, res) => {
    try {
        const report = await bloodService.createReport(req.body, req.user.id);
        return res.status(201).json({
            data: report,
            success: true,
            message: 'Successfully created the Report',
            err: {}
        });
    } catch (error) {
        throw error;
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Something went wrong!!',
            err: error
        });
    }
}

export{
    createReport
}