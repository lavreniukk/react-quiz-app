import userService from "../services/userService.js";
import bcrypt from 'bcryptjs';
import { generateToken } from "../utils/jsonToken.js";

const getUserById = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            throw new Error('User not found');
        }

        res.status(200);
        res.message = 'User found successfully';
        res.data = {
            username: user.username,
        }
    } catch (error) {
        res.status(404);
        res.message = error.message;
    } finally {
        next();
    }
}

const getCurrentUser = async (req, res, next) => {
    try {
        const user = req.user;
        if (!user) {
            throw new Error("User wasn't found");
        }

        res.status(200);
        res.message = 'User found successfully';
        res.data = {
            _id: user._id,
            username: user.username,
            email: user.email
        };
    } catch (error) {
        res.status(404);
        res.message = error.message;
    } finally {
        next();
    }
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
        res.data = {
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        };
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

        if (!registeredUser) {
            throw new Error('Invalid user data');
        }
        
        res.status(200);
        res.message = 'User was successfully created';
        res.data = {
            _id: registeredUser._id,
            username: registeredUser.username,
            email: registeredUser.email,
            token: generateToken(registeredUser._id)
        };
    } catch (error) {
        res.status(400);
        res.message = error.message;
    } finally {
        next();
    }
}

export {
    getUserById,
    getCurrentUser,
    login,
    register
}