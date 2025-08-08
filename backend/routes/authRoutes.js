import { Router } from "express";
import { forgetPass, login, resetPassword, signUp } from "../controllers/authController.js";

let router = Router();

//routes
router.post("/signup", signUp);
router.post('/login' , login);
router.post('/forgotPass' , forgetPass)
router.post("/resetpass", resetPassword);

export default router














// {
//     "name" : "aatiabac",
//     "email" :"aatiabac@gmail.com",
//     "role" : "user",
//     "password" : "12345678"
// }