import User from '../models/user.model.js';
import bctyptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, "All fields are required"));
    }

    const hashedpassword = bctyptjs.hashSync(password, 10);
    const newuser = new User({
        username,
        email,
        password: hashedpassword,
    })


    try {
        await newuser.save();
        res.json("Signup Successful")
    } catch (error) {
        next(error)
    }

}