const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'goushik',
    database:'patient_data'
})

module.exports=mysqlPool

/*async function query(sql,value)
{
  const connection = await mysqlPool.getConnection();
  try{
    const [result] = await connection.query(sql,value)
    return result;
  }
  finally{
    connection.release();
  }
}

async function checkConnection(){
   return ('select 1')
}

async function getAllPatient(patient_data){
    const connection = await mysqlPool.getConnection();
    try{
        const[result]= await mysqlPool.query('SELECT *FROM PATIENTS')
        return result[0];
    }
    finally{
        connection.release();
    }
}


async function getPatientByID(patient_id){
    const connection = await mysqlPool.getConnection();
    try{
        const[result]= await mysqlPool.query('SELECT *FROM PATIENTS WHERE ID=? ',patient_id)
        return result[0];
    }
    finally{
        connection.release();
    }
}


async function insertPatient(patient_data){
    const connection = await mysqlPool.getConnection();
    try{
        const[result]= await mysqlPool.query('INSERT INTO PATIENTS(PATIENTNAME,column2,column 3) VALUES (?,?,?)',[patient_data.column1,
            patient_data.column2,patient_data.column3])
        return result.insertId;
    }
    finally{
        connection.release();
    }
}

async function deletePatientByID(patient_id){
    const connection = await mysqlPool.getConnection();
    try{
        const[result]= await mysqlPool.query('DELETE FROM PATIENTS WHERE ID = ? ',patient_id)
        return result.affectedRows>0;
    }
    finally{
        connection.release();
    }
}

async function UpdatePatientByID(patient_id,updatePatientData){
    const connection = await mysqlPool.getConnection();
    try{
        const[result]= await mysqlPool.query('UPDATE PATIENTS SET ? WHERE ID=?',[updatedPatientData,patient_id])
        return result.affectedRows>0;
    }
    finally{
        connection.release();
    }
}

module.exports={
    getAllPatient,getPatientByID,insertPatient,deletePatientByID,UpdatePatientByID,checkConnection
}*/

