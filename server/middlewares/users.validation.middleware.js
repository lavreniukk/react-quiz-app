const registerUserValid = (req, res, next) => {
    try {
        const {username, email, password} = req.body;
        if (!username || !email || !password) {
            throw new Error('All of the fields are required');
        }
        validateUser(req.body);
        next();
    } catch(error) {
        res.status(400).json({
            error: true,
            message: error.message
        })
    }
}

const loginUserValid = (req, res, next) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            throw new Error('Email and password are required');
        }
        validateUser(req.body);
        next();
    } catch(error) {
        res.status(400).json({
            error: true,
            message: error.message
        })
    }
}

const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordPattern.test(password);
}

const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

const validateUsername = (username) => {
    if (username.length < 3) {
        return false;
    }
    return true;
}

const validateUser = (user) => {
    const {username, email, password} = user;

    if (username && !validateUsername(username)) {
        throw new Error('Username should be at least 3 characters');
    }

    if (email && !validateEmail(email)) {
        throw new Error('Email is in wrong format');
    }

    if (password && !validatePassword(password)) {
        throw new Error('Password should be at least 6 characters, containt at least 1 uppercase, 1 lowercase letter and 1 number');
    }
}

export { registerUserValid, loginUserValid }