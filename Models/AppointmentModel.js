const mongoose = require ("mongoose")
const Schema = mongoose.Schema;
// const todayDate =  moment().utcOffset(0, true).format();



const AppointmentSchema = new Schema({
    date:{
          type: Date,  },
    patientName:{ 
        type: String },
    reasonForAppointment: { 
        type: String },
})

const Appointment = mongoose.model('appointment', AppointmentSchema);
module.exports = Appointment;