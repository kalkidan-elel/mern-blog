import User from '../models/user.model.js';
import bctyptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: "All fields are required" })
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
        res.status(500).json({ message: error.message })
    }

}