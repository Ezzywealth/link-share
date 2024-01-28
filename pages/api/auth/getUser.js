import User from '../../../Models/User';
import { dbConnect, disconnect } from '../../../lib/mongodb';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const { email } = req.body;

		// connect to mongodb database
		await dbConnect();

		const user = await User.findOne({
			email: email,
		});

		await disconnect(); // disconnect from database
		console.log(user);
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
			// if no user is found or password does not match, throw error
			res.status(400).json({
				message: 'User with this email not found',
			});
		}
	} else {
		res.status(400).json({
			message: 'Only POST requests allowed',
		});
	}
};
export default handler;
