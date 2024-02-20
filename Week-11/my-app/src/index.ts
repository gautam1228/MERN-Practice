export interface Env {
	
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		// We can write code like this and handle all the different requests to our backend, but we need a more optimal way to do all that instead of this convoluted way.
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);
		console.log(request.url);

		if (request.method === "GET") {
			return Response.json({
				message: "you sent a get request"
			});
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	}
};