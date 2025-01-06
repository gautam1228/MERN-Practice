import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async () => {
    await prisma.user.create({
        data : {
            username : "gautam123123",
            password : "123123",
            age : 21
        }
    });
};

const deleteUser = async () => {
    await prisma.user.delete({
        where : {
            id : 1
        }
    });
};

const updateUser = async () => {
    await prisma.user.update({
        where : {
            id : 1
        },
        data : {
            username : "gautam12312313"
        }
    });
};

const findUserInfo = async (id : String) => {
    
    const user = await prisma.user.findFirst({
        where : {
            id : Number(id)
        },
        select : {
            todos : true,
            username : true
        }
    });

    console.log(user);
};

// createUser();
findUserInfo("1");