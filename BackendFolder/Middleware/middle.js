const jwt = require('jsonwebtoken');
const jwtAuthMiddleware = (req, res, next) => {
    const token = req.header("x-auth-token")

    if (!token) {
        return res.status(401).json({ message: 'no token' });
    }

    

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET); // Use the same secret key as in login
        req.user = decoded.user // Attach decoded payload to request object
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token', error: error.message });
    }
};

module.exports = jwtAuthMiddleware;
