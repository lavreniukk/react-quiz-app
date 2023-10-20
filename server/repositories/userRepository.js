import User from "../models/user";
import BaseRepository from "./baseRepository";

class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }
}

const userRepository = new UserRepository();
export default userRepository;