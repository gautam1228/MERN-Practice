import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {

    const hashedPass_Alice : string = await bcrypt.hash("alice123", 10);

    const alice = await prisma.user.upsert({
        where : { number: '8787878787' },
        update: {},
        create : {
            number : '8787878787',
            password: hashedPass_Alice,
            name: 'Alice',
            email: 'alice123@gmail.com',
            Balance : {
                create : {
                    amount : 20000,
                    locked : 0
                }
            },
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: "Success",
                    amount: 20000,
                    token: "122",
                    provider: "HDFC Bank",
                },
            },
        },
    });
    
    const hashedPass_Bob : string = await bcrypt.hash("bob123", 10);
    
    const bob = await prisma.user.upsert({
        where : { number: '9898989898' },
        update: {},
        create : {
            number : '9898989898',
            password: hashedPass_Bob,
            name: 'Bob',
            email: 'bob123@gmail.com',
            Balance : {
                create : {
                    amount : 0,
                    locked : 0
                }
            },
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: "Failure",
                    amount: 2000,
                    token: "123",
                    provider: "HDFC Bank",
                },
            },
        },
    });

    console.log({alice, bob});
    
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })