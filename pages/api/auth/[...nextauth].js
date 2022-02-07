import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

import User from '../../../models/user'
import clientPromise from '../../../config/mongodb'

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            async authorize(credentials, req) {
                const { email, password } = credentials;
                // Check if email and password is entered
                if (!email || !password) {
                    throw new Error('Please enter email or password');
                }
                // Find user in the database
                const user = await User.findOne({ email }).select('+password')
                if (!user) {
                    throw new Error('Invalid Email or Password')
                }
                // Check if password is correct or not
                const isPasswordMatched = await user.comparePassword(password);
                if (!isPasswordMatched) {
                    throw new Error('Invalid Email or Password')
                }
                return Promise.resolve(user)
            },
        })
    ],

    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 60,// 30 minutes   
        updateAge: 24 * 60 * 60, // 24 hours
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        encryption: true,
    },
    callbacks: {

        // Called after successful login
        async jwt({ token, user }) {
            if (user) {
                token._id = user;
            }
            return Promise.resolve(token)
        },

        // Called after successful signup
        async session({ session, token }) {
            if (token) {
                session._id = token._id;
            }
            return Promise.resolve(session)
        },
    },
    pages: {
        signIn: '/login',
        signOut: '/',
        error: '/404'
    }
})