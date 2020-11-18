// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
async function main() {
  // ... you will write your Prisma Client queries here
}
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })