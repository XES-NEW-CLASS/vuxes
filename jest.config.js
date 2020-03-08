module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'wav', 'md'], // 测试文件内可引用的外部文件后缀名
  testMatch: [ // 指定要被测试的文件命名格式
    '**/(tests|__tests__)/**/(unit|integration)/**/*.spec.(js|jsx|ts|tsx)'
  ],
  transform: { // 模块转化。
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.js?$': 'babel-jest'
  },
  transformIgnorePatterns: [ // 指定哪些模块不需要转化。
    '/node_modules/'
  ],
  moduleNameMapper: { // 类似于webpack中的alias别名。匹配正则到指定目录。
    vue: '<rootDir>/node_modules/vue/dist/vue.js',
    '^@/(.*)$': '<rootDir>/examples/$1',
    '^~/(.*)$': '<rootDir>/packages/$1'
  },

  // 覆盖率相关配置
  collectCoverage: false,
  collectCoverageFrom: ['**/packages/**/*.{js,vue}', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/tests/coverage',

  testURL: 'http://localhost/',
  watchPlugins: [ // jest控制台辅助工具插件
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
