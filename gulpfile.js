const { parallel, dest, src } = require('gulp');
const JSON5 = require('json5');
const fs = require('fs-extra');
const { compilerOptions } = JSON5.parse(fs.readFileSync('./tsconfig.json', 'utf-8'));
const package = JSON5.parse(fs.readFileSync('./package.json', 'utf-8'));

const mvAssets = function (done) {
  src('src/assets/*').pipe(dest('dist/assets'));
  done();
};

const appendModuleAlias = (done) => {
  const importStatement = `require("module-alias/register")`;
  const indexFile = fs.readFileSync('dist/index.js', 'utf-8');

  fs.writeFileSync('dist/index.js', [importStatement, indexFile].join('\n'));
  done();
};

const assertStructure = function (done) {
  const { paths } = compilerOptions;
  const { _moduleAliases } = package;

  for (const path in paths) {
    const cleaned = path.replace('/*', '');

    if (!Object.keys(_moduleAliases).includes(cleaned)) {
      throw new Error(`TSConfig includes paths which does not exist in package.json, ${cleaned}`);
    }
  }

  done();
};

exports.default = parallel(mvAssets, assertStructure, appendModuleAlias);
