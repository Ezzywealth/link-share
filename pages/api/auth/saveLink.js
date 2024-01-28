import Links from '../../../Models/Links';
import { dbConnect, disconnect } from '../../../lib/mongodb';

const handler = async (req, res) => {
	if (req.method !== 'POST') {
		return res.status(401).json({ message: 'Only POST requests allowed' });
	}

	await dbConnect();
	try {
		const { newLinks } = req.body;
		const data = await Links.insertMany(newLinks);
		res.status(200).json({ message: 'Links saved successfully', data });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
	await disconnect();
};

export default handler;
