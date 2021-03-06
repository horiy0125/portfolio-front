/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
require('dotenv').config();

module.exports = {
  env: {
    GITHUB_OAUTH_ID: process.env.GITHUB_OAUTH_ID,
    GITHUB_OAUTH_SECRET: process.env.GITHUB_OAUTH_SECRET,
    GITHUB_OAUTH_ALLOW_USER_EMAIL: process.env.GITHUB_OAUTH_ALLOW_USER_EMAIL,
    API_BASE_URL: process.env.API_BASE_URL,
    CMS_BASE_URL: process.env.CMS_BASE_URL,
    CMS_KEY: process.env.CMS_KEY,
  },
  images: {
    domains: [
      'images.microcms-assets.io',
      'qiita-user-contents.imgix.net',
      'staging-qiita-user-contents.imgix.net',
      'assets.st-note.com',
      'd291vdycu0ht11.cloudfront.net',
    ],
  },
  webpack(config, { isServer }) {
    config = {
      ...config,
      experiments: {
        ...config.experiments,
        asyncWebAssembly: true,
      },
      output: {
        ...config.output,
        webassemblyModuleFilename:
          (isServer ? '../' : '') + 'static/wasm/webassembly.wasm',
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          src: path.join(__dirname, 'src/'),
        },
      },
    };

    return config;
  },
};
