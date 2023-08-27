import mongoose from 'mongoose';

const bloodReportSchema = new mongoose.Schema({
    RBC:{
        type:String
    },
    MCV:{
        type: String
    },
    Platelets: {
        type: String 
    },
    hemoglobin:{
        type: String
    },
    monocycle:{
        type: String
    },
    MCH:{
        type: String
    },
    Neutrophilis:{
        type: String
    },
    TLC: {
        type: String
    },
    HCT:{
        type: String
    },
    MCHC:{
        type: String
    },
    lymphosytes:{
        type: String
    },
    eosinophis:{
        type:String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    } 
}, {timestamps: true});

const BloodReport = mongoose.model('BloodTest', bloodReportSchema);

export default BloodReport;