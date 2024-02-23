import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: [true, "email is require"] },
    profile: { type: String },
    verify: { type: Boolean },
    about: { type: String },
    address: {
        street: String,
        city: String,
        country: String, // Corrected typo in "country"
        pincode: Number
    },
    password: { type: String, required: [true, 'password if require'] },
}, {
    timeseries: true,
    timestamps: true,
    versionKey: false,
});

userSchema.pre("save", async function (next) {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
});

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Check if the model already exists
const UserModal = mongoose.models.users || mongoose.model("users", userSchema);

export default UserModal;
