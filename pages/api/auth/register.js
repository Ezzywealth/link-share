import User from '../../../Models/User';
import { dbConnect, disconnect } from '../../../lib/mongodb';
import bcryptjs from 'bcryptjs';

const handler = async (req, res) => {
	try {
		await dbConnect();
		// const user = req.body;
		//extract the details from the req body
		const { email, password } = req.body;

		// check if the user already exist
		const existingUser = await User.findOne({ email: email });
		if (existingUser) {
			res.status(422).send('This email has been used by another user!');
			return;
		}

		// if the user does not exist, create a new user
		const newUser = await User.create({
			email,
			password: bcryptjs.hashSync(password),
		});
		// Find and return the document
		const filter = { 'email': email };
		const document = await User.findOne(filter);
		res.json(document);
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ message: e.message });
	}
	await disconnect();
};
export default handler;
