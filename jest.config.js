module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    testPathIgnorePatterns: ['/node_modules/', '/lib/'],
    testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    transform: {
      '.(ts|tsx)': 'ts-jest',
    }
  };
  