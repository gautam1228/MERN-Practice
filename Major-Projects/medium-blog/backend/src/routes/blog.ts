import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createBlogSchema, updateBlogSchema } from "@gautam28dec/medium-common";

export const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string;
        JWT_SECRET : string;
    },
    Variables : {
      userId : string;
    }
}>();

// Authentication Middleware

blogRouter.use("/*", async (c, next) => {

    const authHeader = c.req.header("authorization") || "";
    // Get the token from the header.
    const token = authHeader.split(" ")[1];

    try{
      // Verify the user if the token is correct and get the id of the user.
      const user = await verify(token, c.env.JWT_SECRET);
    
      if(user){

        c.set("userId", user.id);
        await next();

      }
      else{
    
        c.status(401);
    
        return c.json({
          message : "Unauthorized !"
        });
    
      }
    }
    catch(e){

      c.status(403);

      return c.json({
        message : "You're not logged in."
      });

    }
  
  });
  


blogRouter.post('/', async (c) => {
  
  const body = await c.req.json();

  const { success } = createBlogSchema.safeParse(body);

  if(!success){
    
    c.status(411);
    
    return c.json({
      message : "Incorrect Inputs !"
    });
    
  }
  
  const userId = c.get('userId');
  
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate());
  
  const blog = await prisma.post.create({
    data : {
      title : body.title,
      content : body.content,
      published : body.published,
      authorId : userId  
    }
  });
  
  return c.json({
    id : blog.id
  });
  
});



blogRouter.put('/', async (c) => {
  
  const body = await c.req.json();
  
  const { success } = updateBlogSchema.safeParse(body);
  
  if(!success){
    
    c.status(411);
    
    return c.json({
      message : "Incorrect Inputs !"
    });
    
  }

  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate());
  
  const updatedBlog = await prisma.post.update({
    where : {
      id : body.id
    },
    data : {
      title : body.title,
      content : body.content
    }
  });
  
  return c.json({
    id : updatedBlog.id
  });
  
});

  
// ToDo : Add Pagination  
blogRouter.get('/bulk', async (c) => {
    
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate());  

  const blogs = await prisma.post.findMany({
    select : {
      content : true,
      title : true,
      id : true,
      author : {
        select : {
          name : true,
          id : true
        }
      }
    }
  });

  return c.json({
    blogs
  });

});

blogRouter.get('/:id', async (c) => {
  const id = c.req.param('id');

  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate());
  
  try{
    const blog = await prisma.post.findFirst({
      where : {
        id : Number(id)
      },
      select : {
        id : true,
        title : true,
        content : true,
        authorId : true,
        author : {
          select : {
            name : true
          }
        }
      }
    });
    
    return c.json({
      blog
    });

  }
  catch(e){

    c.status(404);

    console.log(e);

    return c.json({
      message : "Error while fetching blog post."
    });
  }

});
