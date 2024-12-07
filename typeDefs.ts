export const typeDefs = `
    type Articel {
        id: ID,
        title: String, 
        avatar: String,
        description: String
    }
    
    type Query {
      hello: String,
      getListArticels: [Articel]
      getArticel(id: ID): Articel
    }

    input ArticelInput {
      title: String, 
      avatar: String, 
      description: String, 

    }

    type Mutation {
      createArticle(article: ArticelInput): Articel
      deleteArticle(id: ID): String
      updateArticle(id: ID,article: ArticelInput): Articel
    }
    
 `

