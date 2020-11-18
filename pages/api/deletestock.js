import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handle(req, res) {
  const { id } = req.props
  const post = await prisma.post.delete({
    where: { ProductID: Number(id) },
  });
  res.json(post);
}