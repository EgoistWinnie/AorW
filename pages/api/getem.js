import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handle(req, res) {
    const em = await prisma.employees.findMany();
    res.json(em)
}
// GET /api/getem