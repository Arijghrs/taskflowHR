// test whether Prisma migrations are applied correctly during container startup.

const { execSync } = require('child_process');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

describe('Database Initialization Tests', () => {
    beforeAll(() => {
        // Run Prisma migrations
        execSync('npx prisma migrate deploy', { stdio: 'inherit' });
    });

    afterAll(async () => {
        await prisma.$disconnect(); // Close Prisma connection
    });

    it('should have a valid schema after migrations', async () => {
        const usersTableExists = await prisma.$queryRaw`
            SELECT EXISTS (
                SELECT 1 FROM information_schema.tables
                WHERE table_name = 'User'
            );
        `;
        expect(usersTableExists).toBeTruthy();
    });
});
