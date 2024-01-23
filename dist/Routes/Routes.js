"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthRoute_1 = __importDefault(require("./AuthRoute"));
const routes = (0, express_1.default)();
// router.post('/', UserController)
routes.use('/v1/', AuthRoute_1.default);
exports.default = routes;
