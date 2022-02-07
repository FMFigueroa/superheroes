import User from '../models/user'
import cloudinary from 'cloudinary'

import ErrorHandler from '../utils/errorHandler'
import catchAsyncErrors from '../middlewares/catchAsyncErrors'
import sendEmail from '../utils/sendEmail'

import absoluteUrl from 'next-absolute-url'
import crypto from 'crypto'

// Setting up cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


// Register user   =>   /api/auth/register
const registerUser = catchAsyncErrors(async (req, res) => {

    if (req.body.avatar.length === 0 || req.body.avatar === undefined) {
        req.body.avatar = 'https://res.cloudinary.com/lenobit/image/upload/v1643941690/lenobit/avatars/default/default_avatar_czn4qn.jpg'
    }
    const avatar = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'lenobit/avatars',
        width: '150',
        crop: 'scale'
    })


    const { first_name, last_name, email, password } = req.body;

    const user = await User.create({
        first_name,
        last_name,
        email,
        password,
        avatar: {
            public_id: avatar.public_id,
            url: avatar.secure_url
        }
    });

    res.status(200).json({
        success: true,
        message: 'Account Registered Successfully'
    })

})

// Current user profile   =>   /api/me
const currentUserProfile = catchAsyncErrors(async (req, res) => {

    const user = await User.findById(req.user._id);

    res.status(200).json({
        message: `Welcome back, ${user.first_name}  ${user.last_name}`,
        user
    })

})

// Update user profile   =>   /api/me/update
const updateProfile = catchAsyncErrors(async (req, res) => {

    const user = await User.findById(req.user._id);

    if (user) {
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.email = req.body.email;

        if (req.body.password) user.password = req.body.password;
    }

    // Update avatar
    if (req.body.avatar !== '') {

        const image_id = user.avatar.public_id;

        // Delete user previous image/avatar
        await cloudinary.v2.uploader.destroy(image_id);

        const avatar = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'lenobit/avatars',
            width: '150',
            crop: 'scale'
        })

        user.avatar = {
            public_id: avatar.public_id,
            url: avatar.secure_url
        }

    }

    await user.save();

    res.status(200).json({
        success: true,
        message: 'Profile Updated Successfully'
    })

})


// Forgot password   =>   /api/password/forgot
const forgotPassword = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler('User not found with this email', 404))
    }

    // Get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false })

    // Get origin
    const { origin } = absoluteUrl(req)

    // Create reset password url
    const resetUrl = `${origin}/password/reset/${resetToken}`

    const message = `Hello, ${user.first_name} \n\n\ We have received a request to reset your password. \n\n\ \n\n\ Your password reset url is as follow: \n\n ${resetUrl} \n\n\ \n\n\ If you have not requested this email, then ignore it. \n\n\ You do not need to reply to this email.`

    try {
        await sendEmail({
            from: `${process.env.STMP_FROM_NAME} < ${process.env.STMP_FROM_EMAIL}>`,
            email: user.email,
            subject: 'LENOBIT Password Recovery',
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`
        })


    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false })

        return next(new ErrorHandler(error.message, 500))
    }

})

// Reset password   =>   /api/password/reset/:token
const resetPassword = catchAsyncErrors(async (req, res, next) => {

    // Hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(req.query.token).digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    });

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Password does not match', 400))
    }

    if (!user) {
        return next(new ErrorHandler('Password reset token is invalid or has been expired', 400))
    }


    // Setup the new password
    user.password = req.body.password

    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save();

    res.status(200).json({
        success: true,
        message: 'Password updated successfully'
    })

})


// Get all users   =>   /api/admin/users
const allAdminUsers = catchAsyncErrors(async (req, res) => {

    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })

})


// Get user details  =>   /api/admin/users/:id
const getUserDetails = catchAsyncErrors(async (req, res) => {

    const user = await User.findById(req.query.id);

    if (!user) {
        return next(new ErrorHandler('User not found with this ID.', 400))
    }

    res.status(200).json({
        success: true,
        user
    })

})


// Update user details  =>   /api/admin/users/:id
const updateUser = catchAsyncErrors(async (req, res) => {

    const newUserData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        role: req.body.role,
        status: req.body.status,
    }

    const user = await User.findByIdAndUpdate(req.query.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        message: 'Profile Updated Successfully'
    })

})


// Delete user    =>   /api/admin/users/:id
const deleteUser = catchAsyncErrors(async (req, res) => {

    const user = await User.findById(req.query.id);

    if (!user) {
        return next(new ErrorHandler('User not found with this ID.', 400))
    }

    // Remove avatar 
    const image_id = user.avatar.public_id;
    await cloudinary.v2.uploader.destroy(image_id)


    await user.remove();

    res.status(200).json({
        success: true,
        user
    })

})


export {
    registerUser,
    currentUserProfile,
    updateProfile,
    forgotPassword,
    resetPassword,
    allAdminUsers,
    getUserDetails,
    updateUser,
    deleteUser
}