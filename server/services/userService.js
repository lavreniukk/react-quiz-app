import userRepository from "../repositories/userRepository.js";

class UserService {
    async getAllUsers() {
        const users = await userRepository.getAll();
        if (!users) {
            return null;
        }
        return users;
    }

    async getUserById(id) {
        const user = await userRepository.getById(id);
        if (!user) {
            return null;
        }
        return user;
    }

    async getUserByEmail(email) {
        const user = await userRepository.getOne({email: email});
        if (!user) {
            return null;
        }
        return user;
    }

    async login() {

    }

    async register() {

    }
}

const userService = new UserService();
export default userService;