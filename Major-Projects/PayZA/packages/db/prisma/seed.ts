import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

    const alice = await prisma.user.upsert({
        where : { number: '8787878787' },
        update: {},
        create : {
            number : '8787878787',
            password: 'alice123',
            name: 'Alice',
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

    const bob = await prisma.user.upsert({
        where : { number: '9898989898' },
        update: {},
        create : {
            number : '9898989898',
            password: 'bob123',
            name: 'Bob',
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