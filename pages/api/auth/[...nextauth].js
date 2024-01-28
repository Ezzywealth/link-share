import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { dbConnect, disconnect } from '../../../lib/mongodb';
import User from '../../../Models/User';
import bcryptjs from 'bcryptjs';

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				// connect to mongodb database
				await dbConnect();
				// find user by email
				const user = await User.findOne({
					email: credentials.email,
				});
				// disconnect from database
				await disconnect();
				// if user is found and password matches, return user object
				if (user && bcryptjs.compareSync(credentials.password, user.password)) {
					return {
						_id: user._id,
						email: user.email,
					};
				}
				// if no user is found or password does not match, throw error
				throw new Error('Invalid email and password, Try Again!!!');
			},
		}),
	],
	session: {
		strategy: 'jwt',
		maxAge: 3 * 24 * 60 * 60, // 3 days
	},
	pages: {
		signIn: '/login',
	},
};

export default NextAuth(authOptions);
