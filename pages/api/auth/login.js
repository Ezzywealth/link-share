import User from '../../../Models/User';

const handler = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.find({
		email: email,
	});
	if (!user) {
		return res.status(401).json({ message: 'Invalid credentials' });
	}
	const isMatch = await user.comparePassword(password);
	res.status(200).json({ token });
};
export default handler;
