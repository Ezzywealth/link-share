import { getServerSession } from 'next-auth';
import User from '../../../Models/User';
import { dbConnect, disconnect } from '../../../lib/mongodb';
import { authOptions } from './[...nextauth]';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const session = await getServerSession(req, res, authOptions);
		if (!session) {
			// If session is null, user is not authenticated
			return res.status(401).json({
				message: 'Unauthorized access',
			});
		}

		// Connect to mongodb database
		await dbConnect();

		try {
			// Use findById to find the user by _id
			const user = await User.findById(session.user.id);

			if (user) {
				res.status(200).json({
					message: 'User found',
					data: {
						id: user._id,
						email: user.email,
						firstName: user.firstName,
						lastName: user.lastName,
						image: user.image,
					},
				});
			} else {
				res.status(404).json({
					message: 'User not found',
				});
			}
		} catch (error) {
			res.status(500).json({
				message: 'Internal Server Error',
			});
		} finally {
			// Disconnect from the database
			await disconnect();
		}
	} else {
		res.status(400).json({
			message: 'Only POST requests allowed',
		});
	}
};

export default handler;
