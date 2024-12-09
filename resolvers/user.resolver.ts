
import md5 from "md5"
import User from "../models/user.model";
import * as generateHelper   from "../helpers/generateHelper"
export const resolverUser= {
    Query: {
        getUser:  async (_,args) => {
            const {id} = args;
            const infoUser = await User.findOne({
                _id: id,
                deleted: false
              });
              
              if (infoUser) {
                return {
                  code: 200,
                  message: "Thành công!",
                  id: infoUser.id,
                  fullName: infoUser.fullName,
                  email: infoUser.email,
                  token: infoUser.token
                };
              } else {
                return {
                  code: 400,
                  message: "Thất bại!"
                };
              }
        }
    },


  Mutation: {
    registerUser: async (_,args) => {
        const {user} = args;

        const emailExisted = await User.findOne({
            deleted: false,
            email: user.email
        })
        if(emailExisted){
            return {
                code: 400, 
                message: "Email đã tồn tại!"
            }
        }else {
            user.password = md5(user.password);
            user.token = generateHelper.generateRandomString(30);   
            const newUser = new User(user);
            const data = await newUser.save();
            return {
                code: 200, 
                message: "Tạo tài khoản thành công",
                id: data.id,
                email: data.email,
                token: data.token,
                fullName: data.fullName
            }
        }
    },
    loginUser: async (_,args) => {
        const {email, password} = args.user;

        const userExisted = await User.findOne({
            email: email,
            deleted: false
        })

        if(!userExisted){
            return {
                code: 400,
                message: "Email không tồn tại!"
            }
        }else{
            if(md5(password) != userExisted.password){
                return {
                    code: 400,
                    message: "Sai mật khẩu!"
                }
            }else{
                return {
                    code: 200,
                    message: "Đăng nhập thành công!",
                    token: userExisted.token,
                    email: userExisted.email,
                    fullName: userExisted.fullName
                }
            }
        }
    }

  }
};
