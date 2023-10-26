import userService from "../services/userService.js";
import { decodeToken } from "../utils/jsonToken.js";

const protectMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            throw new Error('Token is missing');
        }

        const decoded = decodeToken(token);
        req.user = await userService.getUserWithoutPassword(decoded.id);

        if (!req.user) {
            throw new Error("User not found");
        }
        
        next();
    } catch (error) {
        res.status(401).json({
            error: true,
            message: error.message
        })
    }
}

export { protectMiddleware }