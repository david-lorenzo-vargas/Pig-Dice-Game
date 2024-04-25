const path = require('path'); 

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@customTypes'] = path.join(__dirname, 'Types');
    config.resolve.alias['@util'] = path.join(__dirname, 'Util');
    config.resolve.alias['@icon'] = path.join(__dirname, 'app');
    return config;
  },
};