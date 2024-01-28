import Links from '../../../Models/Links';
import { dbConnect, disconnect } from '../../../lib/mongodb';

const handler = async (req, res) => {
	if (req.method !== 'POST') {
		return res.status(401).json({ message: 'Only POST requests allowed' });
	}
	const { user } = req.body;

	await dbConnect();
	try {
		const data = await Links.find({ user: user.id });
		res.status(200).json({ message: 'Links fetched successfully', data });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
	await disconnect();
};
export default handler;
