const aliases = (prefix = `src`) => ({
  '@fuse': `${prefix}/@fuse`,
  '@history': `${prefix}/@history`,
  '@lodash': `${prefix}/@lodash`,
  '@fake-db': `${prefix}/@fake-db`,
  'app/store': `${prefix}/app/store`,
  'app/shared-components': `${prefix}/app/shared-components`,
});

module.exports = aliases;
