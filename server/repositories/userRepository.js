import BaseRepository from "./baseRepository.js";
import User from "../models/user.js";

class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }
}

const userRepository = new UserRepository();
export default userRepository;