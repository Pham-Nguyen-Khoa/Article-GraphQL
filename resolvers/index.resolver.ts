import { resolverArticle} from "./articel.resolver"
import { resolverCategory} from "./category.resolver"
import {resolverUser } from "./user.resolver"
    
export const resolvers = [
    resolverCategory,
    resolverArticle,
    resolverUser
]