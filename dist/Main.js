"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./Routes/Routes"));
const app = (0, express_1.default)();
const port = 5004;
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
app.use('/api/', Routes_1.default);
