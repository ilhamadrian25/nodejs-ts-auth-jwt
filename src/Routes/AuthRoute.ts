import express from "express"
import { Register } from "../Controllers/AuthController"

const AuthRoute = express.Router()

AuthRoute.post('/register', Register)

export default AuthRoute