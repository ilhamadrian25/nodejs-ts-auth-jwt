"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
const Constants_1 = require("../Helpers/Constants");
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        throw new Error("should have");
        return res.status(200).json({
            status: true,
            message: "Successfully registered account",
            data: null
        });
    }
    catch (error) {
        return res.status(500).json({
            status: false,
            code: Constants_1.STATUS_CODE.INTERNAL_SERVER_ERROR
        });
    }
});
exports.Register = Register;
