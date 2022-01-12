const express = require("express");
const router = express.Router();
const users = require("../Models/userModel");
const doctors = require("../Models/DoctorModel");

router.use(express.json());

// ROUTER FOR REGISTER NEW USER

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  let emailExist = await users.findOne({ email: email.toLowerCase() });

  if (emailExist) {
    res.send("E-mail is already used");
    return;
  }
  users
    .create({
      name: name,
      email: email.toLowerCase(),
      password: password,
    })
    .then(() => {
      res.send("done");
    })
    .catch((err) => {
      if (err) res.send("email is already used");
    });
});

// ROUTER FOR CHECK SIGN IN

router.post("/signIn", async (req, res) => {
  const { email, password } = req.body;
  let userExist = await users.findOne({ email: email.toLowerCase() });
  if (userExist == null) {
    res.send("invalid email/password");
    return;
  }

  if (userExist.password == password) {
    res.json(userExist._id);
  } else {
    res.send("invalid email/password");
    return;
  }
});

// GET APPOINTMENT

router.get("/allAppointment", async (req, res) => {
  const Appointments = await Appointment.find();
  res.send(Appointments);
});

// ADD APPOINTMENT

router.post("/addAppointment/:userId/:doctorId", async (req, res) => {
  const { date, patientName, reasonForAppointment } = req.body;

  const d = await doctors.findById(req.params.doctorId);
  const u = await users.findById(req.params.userId);
  let userAppointments = u.appointments;
  userAppointments.push({
    date,
    doctorId: d._id,
    userId: u._id,
    doctorName: d.name,
    patientName: u.name,
    reasonForAppointment,
  });
  u.appointments = await userAppointments;
  u.save();

  let doctorAppointments = d.appointments;
  doctorAppointments.push({
    date,
    doctorId: d._id,
    userId: u._id,
    doctorName: d.name,
    patientName: u.name,
    reasonForAppointment,
  });
  d.appointments = await doctorAppointments;
  d.save();

  res.send("added");
});

// DELETE APPOINTMENT

router.delete("/deleteAppointment/:id", async (req, res) => {
  const deleteAppointment = await Appointment.findByIdAndRemove(req.params.id);
  res.send(deleteAppointment);
});

module.exports = router;
