import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export interface Env{
	DATABASE_URL : string
}

export default {

	async fetch(
		request : Request,
		env : Env,
		ctx : ExecutionContext
	) : Promise<Response> {
		const Prisma = new PrismaClient({
			datasourceUrl : env.DATABASE_URL,
		}).$extends(withAccelerate())

		const response = await Prisma.log.create({
			data : {
				level : 'Info',
				message : 'New Visit',
				meta : {
					headers : JSON.stringify(request.headers)
				}
			}
		});

		console.log(console.log(response));

		return new Response(`request method : ${request.method}`)

	}

}