module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest', // this line tells Jest to use ts-jest for ts and tsx files
  },
  globals: {
      'ts-jest': {
          tsconfig: 'tsconfig.json',
      },
  },
};