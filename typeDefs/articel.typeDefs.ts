export const typeDefsArticel = `
    type Articel {
        id: ID,
        title: String, 
        avatar: String,
        description: String,
        category: Category 
    }


    type Query {
      getListArticels(sortKey: String, sortValue: String): [Articel]
      getArticel(id: ID): Articel

    }

    input ArticelInput {
      title: String, 
      avatar: String, 
      description: String, 
      categoryId: String

    }   

    type Mutation {
      createArticle(article: ArticelInput): Articel
      deleteArticle(id: ID): String
      updateArticle(id: ID,article: ArticelInput): Articel
    }
    
 `

