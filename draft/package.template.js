let testRegex = String.raw`.*\\.spec\\.ts$`

const packageJsonTemplate = `
{
  "name": "@total-services/api-salesforce",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "private": true,
  "license": "UNLICENSED",
  "scripts": {
    "prepare": "husky install",
    "prebuild": "rimraf dist",
    "build": "nest build",
    "reset": "rm package-lock.json; npx rimraf node_modules; npm install",
    "reset:ts:lib": "npx rimraf node_modules/@total-services",
    "format": "prettier --write \\"src/**/*.ts\\" \\"test/**/*.ts\\"",
    "compile:dry": "npx tsc --noEmit",
    "verify": "npm run compile:dry && npm run lint",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/src/main",
    "lint": "eslint \\"{src,apps,test}/**/*.ts\\" --fix",
    "test": "jest",
    "test:ci": "jest --passWithNoTests --coverage $(ls ./src/)",
    "test:watch": "jest --watch",
    "test:cov": "jest --passWithNoTests --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "ts:lib:update": "npx  ncu \\"/^@total-services.*$/\\" -u && npm install"
  },
  "dependencies": {
    "@golevelup/ts-jest": "^0.3.1",
    "@nestjs/common": "^7.6.18",
    "@nestjs/config": "^2.1.0",
    "@nestjs/core": "^7.6.18",
    "@nestjs/platform-express": "^7.6.18",
    "@total-services/azure-service-bus": "^1.1.8",
    "@total-services/configurations": "^1.0.20",
    "@total-services/core": "^1.2.6",
    "@total-services/database": "^1.0.7",
    "dayjs": "^1.11.0",
    "mongodb-memory-server": "^8.0.3",
    "pg": "^8.7.3"
  },
  "devDependencies": {
    "@nestjs/cli": "^8.2.8",
    "@nestjs/schematics": "^8.0.11",
    "@nestjs/testing": "^7.6.15",
    "@types/express": "^4.17.11",
    "@types/faker": "^5.5.7",
    "@types/jest": "^26.0.22",
    "@types/node": "^14.14.36",
    "@types/supertest": "^2.0.10",
    "@typescript-eslint/eslint-plugin": "^4.19.0",
    "@typescript-eslint/parser": "^4.19.0",
    "eslint": "^7.22.0",
    "eslint-config-prettier": "^8.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "faker": "^5.5.3",
    "husky": "^8.0.1",
    "jest": "^26.6.3",
    "jest-sonar": "^0.2.12",
    "jest-sonar-reporter": "^2.0.0",
    "npm-check-updates": "^15.2.6",
    "prettier": "^2.2.1",
    "rimraf": "^3.0.2",
    "supertest": "^6.1.3",
    "ts-jest": "^26.5.4",
    "ts-loader": "^8.0.18",
    "ts-node": "^10.8.1",
    "tsconfig-paths": "^3.9.0",
    "typescript": "^4.2.3"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": ".",
    "testRegex": "${testRegex}",
    "transform": {
      "^.+/.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "reporters": [
      "default",
      "jest-sonar"
    ],
    "coverageReporters": [
      "cobertura",
      "text",
      "lcov"
    ],
    "coverageDirectory": "./coverage",
    "coveragePathIgnorePatterns": [
      "main.ts",
      "<rootDir>/.*/index.ts",
      "<rootDir>/.*.module.ts",
      "<rootDir>/.*.class.ts",
      "<rootDir>/.*.dto.ts",
      "<rootDir>/.*.schema.ts",
      "<rootDir>/.*/core.listen.ts",
      "<rootDir>/.*.entity.ts",
      "<rootDir>/.*.enum.ts"
    ],
    "testEnvironment": "node",
    "roots": [
      "<rootDir>/src/"
    ],
    "setupFilesAfterEnv": [
      "<rootDir>/jest.setup.ts"
    ],
    "testResultsProcessor": "jest-sonar-reporter"
  },
  "jestSonar": {
    "reportFile": "sonar-test-report.xml",
    "indent": 4
  },
  "jestTestResultProcessors": [
    "jest-junit-reporter",
    "jest-sonar-reporter"
  ],
  "engines": {
    "node": ">=16.14.2",
    "npm": ">=8.5.0"
  }
}
`

module.exports = packageJsonTemplate;