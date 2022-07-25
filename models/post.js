const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    content: {
        type: String,
        trim: true,
        required: true,
    }
});

module.exports = mongoose.model('Post', PostSchema);
