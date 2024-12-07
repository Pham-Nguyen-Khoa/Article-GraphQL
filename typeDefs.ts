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
    }
    
 `

