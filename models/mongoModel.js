const mongoose = require('mongoose')
const schema = mongoose.Schema

const patientrecordSchema = new schema({
    Hos_name:{
        type:String,
        required:true,
    },
    Hos_address:{
        type:String
    },
    Doc_name:{
        type:String
    },
    Doc_email:{
        type:String
    },
    Doc_phno:{
        type:String
    },
    paitents:[
        {
          patient_id:{
            type:String,
            required:true,
          },
          patient_name:{
            type:String,
            required:true,
          },
          patient_age:{
            type:Number
          },
          disease:{
            type:[String]
          },
          Admission_reason:{
            type:String
          },
        },
    ],
},{timestamps:true});

const paitentRec=mongoose.model('paitentRec',patientrecordSchema)

module.exports=paitentRec

/*const mysqlModel = require('../models/mysqlmodel')

exports.getAllPatient = async(req,res)=>{
    try{
    const Allpatient = await mysqlModel.getAllPatient();
    res.json(Allpatient);
    }
    catch(err)
    {
        console.error('The Error which is acquiring now is: ',err)
        res.send(500).send('Internal server Error')
    }
};

exports.getPatientByID = async(req,res)=>{
    const patientID = req.params.id;

    try{
        const getPatient = await mysqlModel.getPatientByID(patientID)
        res.json(getPatient);
    }
    catch(err)
    {
        console.error('The Error which is acquiring now is: ',err)
        res.status(500).send('Internal server Error')
    }
};


exports.insertPatient = async(req,res)=>{
    const inserteddata=req.body;
    
    try{
        const newPatientId = await mysqlModel.insertPatient(inserteddata)
        res.json({id:newPatientId});
    }
    catch(err)
    {
        console.error('The Error which is acquiring now is: ',err)
        res.send(500).send('Internal server Error')
    }
};

exports.deletePatientById = async(req,res)=>{
    const patientId = req.params.id;

    try{
        const DeletedID = await mysqlModel.deletePatientById(patientID)
        res.json({success:DeletedID});
    }
    catch(err)
    {
        console.error('The Error which is acquiring now is: ',err)
        res.send(500).send('Internal server Error')
    }
};

exports.updatePatientByID = async(req,res)=>{
    const patientid = req.body.id;
    const updatedPatientData = req.body;
    
    try{
        const UpdatedID = await mysqlModel.updatePatientByID([patientid,updatedPatientData])
        res.json({success:UpdatedID})
    }
    catch(err)
    {
        console.error('The Error which is acquiring now is: ',err)
        res.send(500).send('Internal server Error')
    }
}*/