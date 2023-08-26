import mongoose from 'mongoose';

const bloodReportSchema = new mongoose.Schema({
    RBC:{
        type:String
    },
    WBC:{
        type: String
    },
    Platelets: {
        type: String 
    },
    hemoglobin:{
        type: String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    } 
}, {timestamps: true});

const BloodReport = mongoose.model('BloodTest', bloodReportSchema);

export default BloodReport;