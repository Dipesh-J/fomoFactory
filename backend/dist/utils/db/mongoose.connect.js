"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongooseConnect = async () => mongoose_1.default.connect("mongodb+srv://group22:1234@group22databse.uvtoalh.mongodb.net/group22Database" //{ useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log(`MongoDB Connected Successfully`))
    .catch((err) => console.log(err));
exports.mongooseConnect = mongooseConnect;
