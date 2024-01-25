import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		name: { type: string, required },
		address: { type: string, required },
		color: { type: string, required },
	},
	{
		timestamps: true,
	}
);

const Link = mongoose.models.Link || mongoose.model('Link', orderSchema);
export default Link;
