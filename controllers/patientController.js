const express = require('express'),
router = express.Router();

const service = require('../services/patient.services')

router.get('/',async(req,res)=>{
    const Allpatient = await service.getAllPatient();
    res.send(Allpatient);
});

router.get('/:id',async(req,res)=>{
    const GetPatient = await service.getPatientByID(req.params.id)
    if(GetPatient.length==0)
    res.status(401).send('No record found with the given ID: ',req.params.id)
    else
    res.send(GetPatient);
});

router.delete('/:id',async(req,res)=>{
    const DeletedID = await service.deletePatientByID(req.params.id);
    if(DeletedID==0)
        res.status(404).send("No Record Found with givem ID: "+req.params.id)
    else
        res.send("Deleted Successfully")
});

router.post('/',async(req,res)=>{
    await service.AddorEditPatients(req.body)
    res.status(201).send('Inserted Successfully');
});

router.put('/:id',async(req,res)=>{
    const data = await service.AddorEditPatients(req.body,req.params.body)
    res.send(201).send('Updated successfully')
})

module.exports=router