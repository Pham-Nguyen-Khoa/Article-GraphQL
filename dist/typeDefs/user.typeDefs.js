"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefsUser = void 0;
exports.typeDefsUser = `
    type User {
        id: ID,
        fullName: String, 
        email: String, 
        token: String,
        code: Int, 
        message: String
    }

    type Query {
        getUser: User
    }


    input RegisterUserInput {
      fullName: String, 
      email: String, 
      password: String, 

    }

    
    input LoginUserInput {
      fullName: String, 
      email: String, 
      password: String, 

    }

    type Mutation {
      loginUser(user: LoginUserInput): User
      registerUser(user: RegisterUserInput): User

    }
    
 `;
