"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const category_typeDefs_1 = require("./category.typeDefs");
const articel_typeDefs_1 = require("./articel.typeDefs");
const user_typeDefs_1 = require("./user.typeDefs");
exports.typeDefs = [
    category_typeDefs_1.typeDefsCategory,
    articel_typeDefs_1.typeDefsArticel,
    user_typeDefs_1.typeDefsUser
];
