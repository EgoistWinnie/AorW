  import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET /api/customer/:id
async function handle(req, res) {
    
    const user = await prisma.customers.findFirst({
        where: { name: req.body },
      })
    res.json(post)
  }