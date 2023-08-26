import UserService from "../service/userService.js";

const userService = new UserService();

const createUser = async (req, res) => {
    try {
        const user = await userService.SignUp(req.body);
        return res.status(201).json({
            data: user,
            success: true,
            message: 'Successfully created the user',
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

const login = async (req, res) => {
    try {
        const user = await userService.SignIn(req.body.phoneNumber, req.body.password);
        return res.status(200).json({
            data: user,
            success: true,
            message: 'Successfully logged in',
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

const getReports = async (req,res) => {
    try {
        const reports = await userService.getAllReports(req.user.id);
        return res.status(200).json({
            data: reports,
            success: true,
            message: 'Successfully fetched all the reports',
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
    createUser,
    login,
    getReports
}