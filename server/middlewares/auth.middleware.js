import userService from "../services/userService.js";
import { decodeToken } from "../utils/jsonToken.js";

const protectMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            throw new Error('Token is missing');
        }

        const decoded = decodeToken(token.split(' ')[1]);
        req.user = await userService.getUserWithoutPassword(decoded.id);
        
        next();
    } catch (error) {
        res.status(401).json({
            error: true,
            message: 'Not authorized'
        })
    }
}

export { protectMiddleware }