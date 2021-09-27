// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  root:"src",
  mount: {
  },
  exclude:['**/package-lock.json','**/package.json','**/snowpack.config.js','**/tsconfig.json','**/node_modules','**/LICENSE','**/README.md'],
  plugins: [
    '@snowpack/plugin-typescript'
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
  },
  buildOptions: {
    out:'dist'
  },
};
