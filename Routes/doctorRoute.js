const express = require('express')
const Doctor = require('../Models/DoctorModel')
const router = express.Router();

router.use(express.json())



  router.get("/allDoctors" ,async  (req, res) =>  {
    const Doctor = await Doctor.find()
    res.send(Doctor) 
  })

  
router.get("/:id" ,async  (req, res) =>  {
    const Doctor = await Doctor.findById(req.params.id)
    res.send(Doctor) 
  })


router.put("/updateDoctor/:id", async (req, res) => {
    const updateDoctor = await Doctor.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    res.send(updateDoctor)
  })


router.delete("/deleteDoctor/:id", async (req, res) => {
    const deleteDoctor= await Doctor.findByIdAndRemove(req.params.id)
    res.send(deleteDoctor)
  })
 

// DOCTOR SIGN UP

router.post("/DoctorRegister", async (req, res) => {
    const { name, email, password, specialty, picture } = req.body;
    let emailExist = await Doctor.findOne({ email: email.toLowerCase() });
  
    if (emailExist) {
      res.send("E-mail is already used");
      return;
    }
    Doctor
      .create({
        name: name,
        email: email.toLowerCase(),
        password: password,
        specialty: specialty,
        picture: picture 
      })
      .then(() => {
        res.send("done");
      })
      .catch((err) => {
        if (err) res.send("email is already used");
      });
  });

  // DOCTOR SIGN IN
  
  router.post("/signIn", async (req, res) => {
    const { email, password } = req.body;
    let doctorExist = await Doctor.findOne({ email: email.toLowerCase() });
    if (doctorExist == null) {
      res.send("invalid email/password");
      return;
    }
  
    if (doctorExist.password == password) {
      res.json(doctorExist._id);
    } else {
      res.send("invalid email/password");
      return;
    }
  });
  
  
  module.exports = router;
  



