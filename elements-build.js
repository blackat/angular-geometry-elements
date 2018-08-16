const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/angular-geometry-elements/runtime.js',
    './dist/angular-geometry-elements/polyfills.js',
    './dist/angular-geometry-elements/scripts.js',
    './dist/angular-geometry-elements/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/geometry-elements.js');
  await fs.copyFile(
    './dist/angular-geometry-elements/styles.css',
    'elements/styles.css'
  );
})();
