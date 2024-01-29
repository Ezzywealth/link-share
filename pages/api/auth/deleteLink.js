import { dbConnect, disconnect } from '../../../lib/mongodb';
import Links from '../../../Models/Links';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const { id, user } = req.body;
		if (!user) {
			res.status(401).json({ message: 'Unauthorized' });
			return;
		}

		await dbConnect();
		try {
			const resp = await Links.deleteOne({ _id: id });
			console.log('resp', resp);
			res.status(200).json({ message: 'Link deleted successfully', data: id });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
	await disconnect();
};
export default handler;
