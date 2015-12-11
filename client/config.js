var config = {
  nodeVersion:      process.version,
  nodeHelpVersion:  '0.2.0',
  sourceRepo:       'https://github.com/foundling/node-help',
};

require('fs').writeFileSync('config.json', JSON.stringify(config));
