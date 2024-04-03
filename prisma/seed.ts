import { prisma } from "../src/lib/prisma"

async function seed() {
    await prisma.event.create({
        data:{
            id: "6a5c1ef4-4463-4259-9cfe-3c8401187d31",
            title: "Unite Summit",
            slug: "unite-summit",
            details: "Um evento muito legal!!!",
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log("Banco populado!");
    
    prisma.$disconnect()
})