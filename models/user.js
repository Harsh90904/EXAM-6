const express = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    type: { type: String, enum: ["teacher", "student"], default: "student" },
    age: Number 
});


const User = mongoose.model('User', userSchema);

module.exports = User;
