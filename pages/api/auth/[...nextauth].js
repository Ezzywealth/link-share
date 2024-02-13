import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { dbConnect, disconnect } from '../../../lib/mongodb';
import User from '../../../Models/User';
import bcryptjs from 'bcryptjs';
import { MdSignalCellularNull } from 'react-icons/md';

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			async authorize(credentials) {
				// connect to mongodb database
				await dbConnect();
				// find user by email
				let user = await User.findOne({
					email: credentials.email,
				});
				// disconnect from database
				await disconnect();
				if (!user) {
					// if user with email is not found
					throw new Error('User not found');
				} else if (user && bcryptjs.compareSync(credentials.password, user.password)) {
					// if user is found and password matches, return user object
					user = { id: user._id.toString(), email: user.email };
					return user;
				} else {
					// if user is found and password is not correct
					throw new Error('Invalid password, Try Again!!!');
				}
			},
		}),
	],
	callbacks: {
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token and user id from a provider.
			session.user.id = token?.sub;
			session.user.email = token.email;
			return session;
		},
	},
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60, // 3 days
	},
	pages: {
		signIn: '/login',
	},
};

export default NextAuth(authOptions);
