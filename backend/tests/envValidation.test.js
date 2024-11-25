const dotenv = require('dotenv');
dotenv.config();


describe('Environment Variable Validation', () => {
    it('should have DATABASE_URL set', () => {
        expect(process.env.DATABASE_URL).toBeDefined();
    });

    it('should use a valid DATABASE_URL format', () => {
        const regex = /^postgresql:\/\/\w+:\w+@[\w.]+:\d+\/\w+\?schema=\w+$/;
        expect(process.env.DATABASE_URL).toMatch(regex);
    });
});
