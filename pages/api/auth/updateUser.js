import User from '../../../Models/User';
import { dbConnect, disconnect } from '../../../lib/mongodb';

const handler = async (req, res) => {
	if (req.method === 'PUT') {
		const { firstName, lastName, image, email } = req.body;
		// connect to mongodb database
		await dbConnect();
		// find user by email
		const user = await User.findOne({
			email: email,
		});
		// disconnect from database
		await disconnect();
		// if user is found and password matches, return user object
		if (user) {
			// connect to mongodb database
			await dbConnect();

			// update user
			await User.updateOne(
				{ email: email },
				{
					$set: {
						firstName: firstName || user.firstName,
						lastName: lastName || user.lastName,
						image: image || user.image,
					},
				}
			);

			// find the updated user
			const newUser = await User.findOne({
				email: email,
			});
			// disconnect from database
			await disconnect();
			res.status(200).json({
				message: 'Details updated successfully',
				data: {
					id: newUser._id,
					email: newUser.email,
					firstName: newUser.firstName,
					lastName: newUser.lastName,
				},
			});
		} else {
			// if no user is found or password does not match, throw error
			res.status(400).json({ message: 'User with this email not found' });
		}
	} else {
		res.status(400).json({ message: 'Only PUT requests allowed' });
	}
};
export default handler;
