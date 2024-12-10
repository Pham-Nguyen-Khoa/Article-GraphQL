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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolverCategory = void 0;
const categories_model_1 = __importDefault(require("../models/categories.model"));
exports.resolverCategory = {
    Query: {
        getListCategory: () => __awaiter(void 0, void 0, void 0, function* () {
            const categories = yield categories_model_1.default.find({
                deleted: false,
            });
            return categories;
        }),
        getCategory: (_, argument) => __awaiter(void 0, void 0, void 0, function* () {
            const { id } = argument;
            const category = yield categories_model_1.default.findOne({
                _id: id,
                deleted: false,
            });
            return category;
        }),
    },
    Mutation: {
        createCategory: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { category } = args;
            const record = new categories_model_1.default(category);
            yield record.save();
            return record;
        }),
        updateCategory: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { id, category } = args;
            yield categories_model_1.default.updateOne({
                _id: id,
                deleted: false,
            }, category);
            const record = yield categories_model_1.default.findOne({
                _id: id,
                deleted: false,
            });
            return record;
        }),
        deleteCategory: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { id } = args;
            yield categories_model_1.default.updateOne({
                _id: id,
            }, {
                deleted: true,
                deletedAt: new Date(),
            });
            return "Đã xóa!";
        }),
    },
};
