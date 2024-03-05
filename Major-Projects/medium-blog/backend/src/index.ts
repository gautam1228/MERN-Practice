import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign, verify } from 'hono/jwt';


const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET : string
  },
  Variables : {
    userId : string
  }
}>().basePath("/api/v1");



// Authentication Middleware

app.use("/blog/*", async (c, next) => {

  const header = c.req.header("authorization") || "";
  // Get the token from the header.
  const token = header.split(" ")[1];
  // Verify the user if the token is correct and get the id of the user.
  const response = await verify(token, c.env.JWT_SECRET);

  if(response.id){
    await next();
  }
  else{

    c.status(401);

    return c.json({
      msg : "Unauthorized !"
    });

  }

});

app.post('/user/signup', async (c) => {
  
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate());

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

});


app.post('/user/signin', async (c) => {
  
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const user = await prisma.user.findUnique({
    where : {
      email : body.email
    }
  });

  if(!user){

    c.status(403);

    return c.json({
      msg : "User not found !"
    });

  }

  const token = await sign({
    id : user.id
  }, c.env.JWT_SECRET);

  c.set('userId', token);
  
  return c.json({
    msg : "Singin Succesful."
  });

});



app.post('/blog', (c) => {
  
  
  return c.text("")
});



app.put('/blog', (c) => {
  
  
  return c.text("posting route")
});



app.get('/blog/:id', (c) => {
  const id = c.req.param('id');
  console.log(id);
  return c.text("get blog route")
});



app.get('/blog/bulk', (c) => {
  
  
  return c.text("get blogs route")
});



export default app
