import { PrismaClient ,  Twit } from "@prisma/client"
import { ICreateTwit } from "./twit.types"
import { date } from "zod"

const prisma = new PrismaClient()

export class TwitService {
    prisma = prisma

    async getAll(): Promise<Twit[]> {
        return prisma.twit.findMany(); // Извлекает все твиты из базы данных
    }
    
    create (twit: ICreateTwit) : Promise<Twit> {
        return this.prisma.twit.create({
            data : twit
        })
    }
} 