import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		name: { type: String, required: true },
		address: { type: String, required: true },
		color: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Links = mongoose.models.Links || mongoose.model('Links', linkSchema);
export default Links;
