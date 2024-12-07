import express from "express";
import { registerUser, loginUser, authenticateUser } from "../controllers/user.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", verifyToken, authenticateUser);

export default router;
