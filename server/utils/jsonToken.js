import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '10d',
    })
}

const decodeToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

export { generateToken, decodeToken }