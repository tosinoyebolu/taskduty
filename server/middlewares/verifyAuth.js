import JWT from "jsonwebtoken";
import createHttpError from "http-errors";

const verifyTken = (req, res, next) => {
  const Token = req.headers.authorization.split("")[1];

  if (!token) {
    return next(createHttpError(401, "You are unathorized"));
  }
  jwt.verify(token, process.env, JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return next(createHttpError(403, "Broken or expired token"));
    }
    req.user = user
    next();
  });
};
export default verifyToken;
