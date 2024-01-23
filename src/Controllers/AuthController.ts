import { Request, Response } from "express"
import { STATUS_CODE } from "../Helpers/Constants"

export const Register = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            status: true,
            message: "Successfully registered account",
            data: null
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            code: STATUS_CODE.INTERNAL_SERVER_ERROR
        })
    }
} 