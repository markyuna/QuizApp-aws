module.exports = {
    preset: 'react-native',
    setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
    transformIgnorePatterns: [
        'node_modules/(?!(react-native|@react-native|react-navigation|@react-navigation/.*))',
    ],
    moduleNameMapper: {
        '^@react-native-firebase/app$': '@react-native-firebase/app',
    },
    testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*\\.(test|spec))\\.[jt]sx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};