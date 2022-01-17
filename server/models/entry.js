const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema({
    creator_id: String,
    creator_name: String,
    score: Number,
    timestamp: { type: Date, default: Date.now },
    // extra params tbd
});

module.exports = mongoose.model("Entry", EntrySchema);