import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        image: { type: String, required: true },
        speciality: { type: String, required: true },
        degree: { type: String, required: true },
        experience: { type: String, required: true },
        about: { type: String, required: true },
        available: { type: Boolean, default: true},
        fees: { type: Number, required: true },
        address: { type: Object, required: true },
        date: { type: Number, required: true }, //when the user was added in db
        slots_booked: { type: Object, default: {} }

    }, { minimize: false }
)
//minimize false help you to use empty object as default value
//if it is false we cant create a doctor data with empty object

// if the models.doctor is available then we can use that model it if not available then create a model using doctorSchema 
const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema);

export default doctorModel;