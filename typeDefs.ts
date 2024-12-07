export const typeDefs = `
    type Articel {
        id: ID,
        title: String, 
        avatar: String,
        description: String
    }

    type Category {
        id: ID,
        title: String, 
        avatar: String,
    }
    
    type Query {
      hello: String,
      getListArticels: [Articel]
      getArticel(id: ID): Articel
      getListCategory: [Category]
      getCategory(id: ID): Category
    }

    input ArticelInput {
      title: String, 
      avatar: String, 
      description: String, 

    }

    input CategoryInput {
      title: String, 
      avatar: String, 
    }

    type Mutation {
      createArticle(article: ArticelInput): Articel
      deleteArticle(id: ID): String
      updateArticle(id: ID,article: ArticelInput): Articel
      createCategory(category: CategoryInput): Category
      updateCategory(id: ID,category: CategoryInput): Category
      deleteCategory(id: ID): String
    }
    
 `

