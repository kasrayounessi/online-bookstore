const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'must provide book name'],
        trim: true,
        maxlength: [40, 'title cannot be longer than 40 characters']
    },
    quantity: {
        type:Number,
        default: 0
    },
    buyer: {
        type:Schema.Types.ObjectId, ref: 'User'
    }
});

module.exports = mongoose.model('Book', BookSchema);