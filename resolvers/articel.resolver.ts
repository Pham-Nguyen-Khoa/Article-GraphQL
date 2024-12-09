import Articel from "../models/articel.model";
import Category from "../models/categories.model";

export const resolverArticle = {
  Query: {
    getListArticels: async (_, args) => {
      const { sortKey, sortValue, currentPage, limitPage } = args;

      // Sort
      const sort = {};
      if (sortKey && sortValue) {
        sort[sortKey] = sortValue;
      }
      // End Sort


      //Pagination
      const skip = (currentPage - 1) * limitPage;

      // End Pagination 

      const articels = await Articel.find({
        deleted: false,
      }).sort(sort).limit(limitPage).skip(skip);
      return articels;
    },
    getArticel: async (_, argument) => {
      const { id } = argument;
      const articels = await Articel.findOne({
        _id: id,
        deleted: false,
      });

      return articels;
    },
  },
  Articel: {
    category: async (article) => {
      const categoryInfo = await Category.findOne({
        _id: article.categoryId,
        deleted: false,
      });
      return categoryInfo;
    },
  },
  Mutation: {
    createArticle: async (_, args) => {
      const { article } = args;
      const record = new Articel(article);
      await record.save();
      return record;
    },
    deleteArticle: async (_, args) => {
      const { id } = args;
      await Articel.updateOne(
        {
          _id: id,
        },
        {
          deleted: true,
          deletedAt: new Date(),
        }
      );
      return "Đã xóa!";
    },
    updateArticle: async (_, args) => {
      const { id, article } = args;

      await Articel.updateOne(
        {
          _id: id,
          deleted: false,
        },
        article
      );
      const record = await Articel.findOne({
        _id: id,
        deleted: false,
      });
      return record;
    },
  },
};
