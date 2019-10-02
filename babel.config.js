const presets = [
  '@babel/preset-env',
  '@babel/preset-typescript',
  '@babel/preset-react',
];

module.exports = {
  presets,
  env: {
    test: {
      presets,
    },
    production: {
      presets: [
        [
          '@babel/preset-env', {
            targets: {
              browsers: [ 'last 2 versions', '> 5% in PL' ],
              node: 'current',
            },
            forceAllTransforms: true,
            modules: false,
          },
        ],
        [
          '@babel/preset-react', {
            targets: {
              browsers: [ 'last 2 versions', '> 5% in PL' ],
              node: 'current',
            },
            forceAllTransforms: true,
            modules: false,
          },
        ],
      ],
    },
  },
};
