import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';


const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET : string
  },
  Variables : {
    userId : string
  }
}>().basePath("/api/v1");


app.use('/*', cors());

// Routing In Hono
app.route("/user", userRouter);
app.route("/blog", blogRouter);


export default app
