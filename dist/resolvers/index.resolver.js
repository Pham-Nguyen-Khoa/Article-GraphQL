"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const articel_resolver_1 = require("./articel.resolver");
const category_resolver_1 = require("./category.resolver");
const user_resolver_1 = require("./user.resolver");
exports.resolvers = [
    category_resolver_1.resolverCategory,
    articel_resolver_1.resolverArticle,
    user_resolver_1.resolverUser
];
