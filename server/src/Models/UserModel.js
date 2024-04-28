const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
    },
    userName: {
        type: String,
        required: [true],
        unique: true,
    },
    bloodGroup: {
        type: String,
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
    }
});

userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);