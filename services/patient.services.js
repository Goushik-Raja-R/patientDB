const mysqlmodel = require('../models/mysqlmodel')


module.exports.getAllPatient = async()=>{
    const [record] = await mysqlmodel.query('SELECT *FROM PATIENTS');
    return record;
}

module.exports.getPatientByID = async(id)=>{
    const [record] = await mysqlmodel.query('SELECT *FROM PATIENTS WHERE PATIENT_ID = ?',[id]);
    return record;
}
 
module.exports.deletePatientByID = async(id)=>{
    const [{affectedRows}] = await mysqlmodel.query('DELETE FROM PATIENTS WHERE PATIENT_ID = ?',[id])
    return affectedRows;
}

module.exports.AddorEditPatients=async (obj,PATIENT_ID=0)=>{
    const [data]= await mysqlmodel.query("CALL usp_add_or_edit_patient(?,?,?,?)",
    [PATIENT_ID,obj.PATIENTNAME,obj.PATIENTAGE,obj.PATIENTADDRESS])
    return data;
}
