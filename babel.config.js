module.exports = {
  transform: {
    '\\.[tj]sx?$': [
      'babel-jest',
      {
        presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
        plugins: ['@babel/plugin-transform-async-to-generator'],
      },
    ],
  },
}
