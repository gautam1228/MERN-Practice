import { PrismaClient } from "@prisma/client/extension";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signupSchema } from "@gautam28dec/medium-common";
import { signinSchema } from "@gautam28dec/medium-common";


export const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    }
}>();

userRouter.post('/signup', async (c) => {
  
    const body = await c.req.json();

    const { success } = signupSchema.safeParse(body);
    
    if(!success){
        c.status(411);
        return c.json({
            message: "Incorrect Inputs !"
        });
    }
    
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());
    
    try{
      
      const user = await prisma.user.create({
        data : {
          email : body.email,
          password : body.password,
          name : body.name
        }
      });
      
      const token = await sign({
        id : user.id
      }, c.env.JWT_SECRET); 
      
      return c.json({
        jwt : token
      });
      
    }
    catch(e){
      console.log(e);
      
      c.status(411);
      
      return c.text("Invalid.");
    }
  });
  
  
  userRouter.post('/signin', async (c) => {
    
    const body = await c.req.json();
    
    const { success } = signinSchema.safeParse(body);
    
    if(!success){
        c.status(411);
        return c.json({
            message: "Incorrect Inputs !"
        });
    }

    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());
    
    try{
      const user = await prisma.user.findUnique({
        where : {
          email : body.email
        }
      });
  
      if(!user){
  
        c.status(403);
  
        return c.json({
          message : "User not found !"
        });
  
      }
  
      const token = await sign({
        id : user.id
      }, c.env.JWT_SECRET);
  
    //   c.set('userId', token);
      
      return c.json({
        message : "Signin Succesful."
      });
  
    }
    catch(e){
      
      console.log(e);
  
      c.status(403);
  
      return c.json({
        message : "Incorrect Credentials."
      });
  
    }
});
  
