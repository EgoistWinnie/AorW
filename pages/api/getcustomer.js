  import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET /api/customer/:id
async function handleGET(req, res) {
    
    const user = await prisma.customers.findOne({
        where: { name: 'Alice' },
      })
    res.json(post)
  }