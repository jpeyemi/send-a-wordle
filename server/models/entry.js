const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema({
    creator_id: String,
    creator_name: String,
    score: Number,
    // extra params tbd
});