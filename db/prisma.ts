// db/prisma.ts
import { PrismaClient } from '@/lib/generated/prisma'
import { PrismaNeon } from '@prisma/adapter-neon'
import { neonConfig } from '@neondatabase/serverless'
import ws from 'ws'

// Enable Neon WebSocket mode
neonConfig.webSocketConstructor = ws

// Create Prisma adapter with the Neon connection string
const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
})

// Create Prisma client + decimal transformers
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product: { price: any }) {
          return product.price.toString()
        },
      },
      rating: {
        compute(product: { rating: any }) {
          return product.rating.toString()
        },
      },
    },
  },
})
