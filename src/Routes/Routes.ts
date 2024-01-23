import express from "express"
import { UserController } from "../Controllers/UserController"
import AuthRoute from "./AuthRoute"

const routes = express()

// router.post('/', UserController)
routes.use('/v1/', AuthRoute)

export default routes