import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username : string, password : string, firstName : string, lastName : string){

    const response = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        }
    });

    console.log(response);

}

// insertUser("username", "password", "firstName", "lastName");

async function getTodosAndUserDetails(userId : number){

    await prisma.todo.create({
        data : {
            title : "Go To Gym.",
            description : "7-8 AM",
            userId : 1
        }
    });
    
    const response = await prisma.todo.findMany({
        where : {
            userId : userId
        },
        select : {
            id : true,
            user : true,
            title : true,
            description : true,
            done : true
        }
    });

    console.log(response);

}


getTodosAndUserDetails(1);