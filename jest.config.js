module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [ // 指定要被测试的文件命名格式
    '**/(tests|__tests__)/**/(unit|integration)/**/*.spec.(js|jsx|ts|tsx)'
  ],
  transform: { // 模块转化。
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.js?$': 'babel-jest'
  },
  moduleNameMapper: { // 类似于webpack中的alias别名。匹配正则到指定目录。
    '^@/(.*)$': '<rootDir>/examples/$1',
    '^~/(.*)$': '<rootDir>/packages/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/packages/**/*.{js,vue}', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/tests/coverageDirectory'
}

// module.exports = {
//   preset: '@vue/cli-plugin-unit-jest', // 预处理器
//   moduleFileExtensions: [ 'js', 'jsx', 'json', 'vue', 'wav' ], // 测试文件内可引用的外部文件后缀名
//   transform: { // 模块转化。
//     // '/node_modules/flex.css/dist/flex.css': 'babel-jest',
//     '^.+\\.vue$': 'vue-jest',
//     '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
//     '^.+\\.js?$': 'babel-jest'
//   },
//   transformIgnorePatterns: [ // 指定哪些模块不需要转化。
//     '/node_modules/',
//     '^.+\\.wav$'
//   ],
//   moduleNameMapper: { // 类似于webpack中的alias别名。匹配正则到指定目录。
//     // '^@/(.*)$': '<rootDir>/src/$1',
//     '^@common/(.*)$': '<rootDir>/src/common-components/$1',
//     '^@/assets/(.*)$': '<rootDir>/src/assets/$1',
//     '^@/(.*)$': '<rootDir>/src/$1',
//   },
//   snapshotSerializers: [ // 快照后的文件处理化插件
//     'jest-serializer-vue'
//   ],
//   testMatch: [ // 指定要被测试的文件命名格式
//     '**/(tests|__tests__)/**/(unit|integration)/**/*.spec.(js|jsx|ts|tsx)'
//   ],
//   testURL: 'http://localhost/',
//   watchPlugins: [ // jest控制台辅助工具插件
//     'jest-watch-typeahead/filename',
//     'jest-watch-typeahead/testname'
//   ]
// }

