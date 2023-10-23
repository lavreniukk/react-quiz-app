import userService from "../services/userService.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const getAllUsers = async (req, res, next) => {
    res.status(200).json({error: false, message: 'Get all users'});
}

const getUserById = async (req, res, next) => {
    res.status(200).json({error: false, message: 'Get users with id'});
}

const getUserByEmail = async (req, res, next) => {
    res.status(200).json({error: false, message: 'Get users with id'});
}

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await userService.getUserByEmail(email);

        if (!user) {
            throw new Error("User with such email wasn't found");
        }

        if (user && !(await bcrypt.compare(password, user.password))) {
            throw new Error('Invalid password or email');
        }

        res.status(200);
        res.message = 'Login successfull';
        res.data = user;
    } catch (error) {
        res.status(404);
        res.message = error.message;
    } finally {
        next();
    }
}

const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userService.getUserByEmail(email);

        if (user) {
            throw new Error('User with such email already exists!');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;

        const registeredUser = await userService.register(req.body);

        res.status(200);
        res.message = 'User was successfully created';
        res.data = registeredUser;
    } catch (error) {
        res.status(400);
        res.message = error.message;
    } finally {
        next();
    }
}

export {
    getAllUsers,
    getUserById,
    getUserByEmail,
    login,
    register
}