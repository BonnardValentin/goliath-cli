let databaseString = `${process.env.DB_DATABASE}_tests`;

const jestSetupTemplate = `import * as dotenv from 'dotenv';
import * as path from 'path';

const { testPath } = expect.getState();
const assetsPath = path.resolve(
  testPath.replace(/\/src\/app\/(.*)/g, '/src/assets/.env'),
);

dotenv.config({
  path: assetsPath,
});

process.env.APP_ENV = 'test';
process.env.DB_DATABASE = ${databaseString};
// MOCK redis
jest.mock('redis', () => jest.requireActual('redis-mock'));
`;

module.exports = jestSetupTemplate;
