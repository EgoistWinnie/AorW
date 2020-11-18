import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handle(req, res) {
    const prodId = req.query.id
  
    const stock = await prisma.products.findMany();
    res.json(stock)
}
  
  
 