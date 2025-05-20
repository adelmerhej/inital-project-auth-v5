/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'

//import connectMongoDb from "@/lib/mongodb";
import { User } from "@/models/UserModel";
import bcrypt from "bcryptjs";
import * as z from 'zod';
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);
  
  const { username, email, password } = values;

  console.log(values);
  // const newUser = await prisma.user.create({
//   data: {
//     email: values.email,
//     password: values.password,
//     username: 'adelm',
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }
// });


  
  try {
    if(!validateFields) {
      return { error: "Invalid fields!"}
    }
    
    //await connectMongoDb();
    const userFound = await User.findOne({ email });
    if(userFound){
        return {
            error: 'Email already exists!'
        }
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
}catch(e){
    console.log(e);
}
  return { success: "Email sent!"}
};