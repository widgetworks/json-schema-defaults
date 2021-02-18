module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    "moduleFileExtensions": [
      "js",
      "ts",
    ],
    transform: {
        // CFH: only transform js files
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    'transformIgnorePatterns': [
        // Don't transform node_modules packages (but we allow bower dependencies to be transformed)
        '<rootDir>/node_modules/'
    ],
    'moduleDirectories': [
        'node_modules',
    ],
    "testPathIgnorePatterns": [
        "/node_modules/",
    ],
    "testMatch": [
        "<rootDir>/**/*Spec.js"
    ],

};

/*
"jest": {
    "moduleFileExtensions": [
      "js",
      "ts"
    ],
    "testURL": "http://localhost/",
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    }
  }
*/
