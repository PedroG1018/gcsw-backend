const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const participantSchema = new Schema({
    participant_id: { type: String, require: false, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, require: true },
    school: { type: String, require: true},
    dates_with_objectives : { type: Map, required: true }
}, {
    timestamps: true,
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;