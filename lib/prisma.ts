import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

/**
 * Professional Prisma Client Configuration
 * 1. Implements Singleton pattern for Next.js (HMR safety)
 * 2. Manages PostgreSQL connection pool via @prisma/adapter-pg
 * 3. Environment-aware logging (Debug queries in dev, only errors in prod)
 */

if (!process.env.DATABASE_URL) {
  throw new Error('❌ DATABASE_URL is missing in environment variables');
}

const prismaClientSingleton = () => {
  // 1. Create the PostgreSQL Connection Pool
  const pool = new Pool({ 
    connectionString: process.env.DATABASE_URL,
    max: 20, // Optimization: Limit pool size for serverless/Next.js
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });

  // 2. Initialize the Adapter
  const adapter = new PrismaPg(pool);

  // 3. Instantiate the Client
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' 
      ? ['query', 'info', 'warn', 'error'] 
      : ['error'],
  });
};

// Type definition for the global object to prevent TS errors
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

// Use existing instance if it exists (Development), otherwise create new
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

// Store the instance globally in non-production environments
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}