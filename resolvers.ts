import Articel from "./models/articel.model";

export const resolvers = {
    Query: {
      hello: () => {
        return "Hello World!";
      },
      getListArticels:  async () => {
        const articels = await Articel.find({
            deleted: false
        })
        return articels
      },
      getArticel:  async (_,argument) => {
        const {id} = argument;
        const articels = await Articel.findOne({
          _id: id,
          deleted: false
        })

        return articels
      }
    },
    Mutation: {
      createArticle: async (_,args) => {
          const { article } = args;
          const record = new Articel(article);
          await record.save();
          return record 
      }
    }
  };
