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
      }
    },
  };
