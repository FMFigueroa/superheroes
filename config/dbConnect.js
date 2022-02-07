import mongoose from 'mongoose'


if (!process.env.DB_LOCAL_URI) {
    throw new Error(
        'Please define the URI environment variable inside .env.local'
    )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 **/
let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(process.env.DB_LOCAL_URI, opts).then((mongoose) => {
            return mongoose
        }).then(() => console.log('Connected to MongoDB 🚀 Successfully'))
    }
    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect;