import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handle(req, res) {
  const { id } = req.params
  const post = await prisma.post.delete({
    where: { ProductID: Number(id) },
  });
  res.json(post);
}