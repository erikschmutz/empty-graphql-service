const { defaults } = require('jest-config');

const isIntegrations = !!process.env.INTER;
const bigTextIntegration = `
            +-+-+-+-+-+-+-+-+-+-+-+
            |I|n|t|e|g|r|a|t|i|o|n|
            +-+-+-+-+-+-+-+-+-+-+-+                                                                                                                                                                                       
`;
const exclutions = !isIntegrations ? ['.*.i.spec.ts'] : ['[^.i].spec.ts'];

if (isIntegrations) {
  console.log(bigTextIntegration);
}

module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  collectCoverage: true,
  testPathIgnorePatterns: exclutions,
  testEnvironment: 'node',
  coverageReporters: ['json', 'lcov', 'text', 'clover'], // "text-summary"
};
