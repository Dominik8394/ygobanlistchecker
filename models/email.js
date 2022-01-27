const Schema = mongoose.Schema;

const EmailSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    required: true
})

const Email = mongoose.model('Email', EmailSchema);

module.exports = Email;