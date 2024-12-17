"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class TwitService {
    constructor() {
        this.prisma = prisma;
    }
    async getAll() {
        return prisma.twit.findMany(); // Извлекает все твиты из базы данных
    }
    create(twit) {
        return this.prisma.twit.create({
            data: twit
        });
    }
}
exports.TwitService = TwitService;
