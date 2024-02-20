import { Hono } from 'hono';

const app = new Hono()

// Creating a middleware.
async function authMiddleware(c: any, next: any){

	if(c.req.header("Authorization")){
		await next();
	} else {
		return c.text("You don't have access.");
	}

}

app.get("/", async (c) => {
	
	return c.text("Hi there ! This is the starting page.");

});

app.post("/", authMiddleware, async (c) => {

	const body = await c.req.json();

	console.log(body.message);
	console.log(c.req.header("Authorization"));
	console.log(c.req.query("userId"));

	return c.text("Hello, from the server !");

});

export default app
