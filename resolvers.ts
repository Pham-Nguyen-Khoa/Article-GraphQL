import Articel from "./models/articel.model";
import Category from "./models/categories.model";

export const resolvers = {
  Query: {
    hello: () => {
      return "Hello World!";
    },
    getListArticels: async () => {
      const articels = await Articel.find({
        deleted: false,
      });
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
    getListCategory: async () => {
      const categories = await Category.find({
        deleted: false,
      });
      return categories;
    },
    getCategory: async (_, argument) => {
      const { id } = argument;
      const category = await Category.findOne({
        _id: id,
        deleted: false,
      });

      return category;
    },
  },
  Articel: {
    category: async (article) => {
      const categoryInfo = await Category.findOne({
        _id: article.categoryId,
        deleted: false
      });
      return categoryInfo
    }
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
    createCategory: async (_, args) => {
      const { category } = args;
      const record = new Category(category);
      await record.save();
      return record;
    },
    updateCategory: async (_, args) => {
      const { id, category } = args;

      await Category.updateOne(
        {
          _id: id,
          deleted: false,
        },
        category
      );
      const record = await Category.findOne({
        _id: id,
        deleted: false,
      });
      return record;
    },
    deleteCategory: async (_, args) => {
      const { id } = args;
      await Category.updateOne(
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
  },
};
