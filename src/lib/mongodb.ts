import mongoose from 'mongoose'

export const connectMongoDB = async () => {
  try {
    // if (process.env.MONGODB_URI) {
    //   await mongoose.connect(process.env.MONGODB_URI)
    //   console.log('Connected to MongoDB')
    // }

    await mongoose.connect(
      'mongodb+srv://admin:HiyYtye9G8HGIb6D@cluster0.dxwlabi.mongodb.net/?retryWrites=true&w=majority',
    )
  } catch (error) {
    console.log('Error connection to MongoDB', error)
  }
}
