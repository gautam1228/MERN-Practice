const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

function authMiddleware(req, res, next){

    const authHeaders = req.headers.authorization;

    if(!authHeaders || !authHeaders.startsWith('Bearer ')){
        return res.status(403).json({});
    }

    const token = authHeaders.split(" ")[1];
    
    try{
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;

        next();
    }
    catch(e){
        return res.status(403).json({});
    }

}

module.exports = {
    authMiddleware
}