const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: false },
	rating: { type: Number, required: false }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;