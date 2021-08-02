const { TocModulesPlugin } = require("./dist/toc-modules-plugin");
const { ExternalModuleMapPlugin } = require("./dist/external-module-map-plugin");

module.exports.load = (app) => {
  app.options.addDeclaration({ name: 'external-modulemap', short: 'em' });
  app.converter.addComponent('external-module-map', ExternalModuleMapPlugin);

  app.renderer.addComponent('toc-modules-plugin', TocModulesPlugin);
}