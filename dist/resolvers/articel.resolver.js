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
exports.resolverArticle = void 0;
const articel_model_1 = __importDefault(require("../models/articel.model"));
const categories_model_1 = __importDefault(require("../models/categories.model"));
exports.resolverArticle = {
    Query: {
        getListArticels: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { sortKey, sortValue, currentPage, limitPage, filterKey, filterValue, keyword } = args;
            let find = {
                deleted: false,
            };
            const sort = {};
            if (sortKey && sortValue) {
                sort[sortKey] = sortValue;
            }
            const skip = (currentPage - 1) * limitPage;
            if (filterKey && filterValue) {
                find[filterKey] = filterValue;
            }
            if (keyword) {
                const keywordRegex = new RegExp(keyword, "i");
                find["title"] = keywordRegex;
            }
            const articels = yield articel_model_1.default.find(find)
                .sort(sort)
                .limit(limitPage)
                .skip(skip);
            return articels;
        }),
        getArticel: (_, argument) => __awaiter(void 0, void 0, void 0, function* () {
            const { id } = argument;
            const articels = yield articel_model_1.default.findOne({
                _id: id,
                deleted: false,
            });
            return articels;
        }),
    },
    Articel: {
        category: (article) => __awaiter(void 0, void 0, void 0, function* () {
            const categoryInfo = yield categories_model_1.default.findOne({
                _id: article.categoryId,
                deleted: false,
            });
            return categoryInfo;
        }),
    },
    Mutation: {
        createArticle: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { article } = args;
            const record = new articel_model_1.default(article);
            yield record.save();
            return record;
        }),
        deleteArticle: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { id } = args;
            yield articel_model_1.default.updateOne({
                _id: id,
            }, {
                deleted: true,
                deletedAt: new Date(),
            });
            return "Đã xóa!";
        }),
        updateArticle: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { id, article } = args;
            yield articel_model_1.default.updateOne({
                _id: id,
                deleted: false,
            }, article);
            const record = yield articel_model_1.default.findOne({
                _id: id,
                deleted: false,
            });
            return record;
        }),
    },
};
