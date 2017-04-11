'use strict';

const Metalsmith  = require('metalsmith');
const layouts = require('metalsmith-layouts');
const collections = require('metalsmith-collections');
const handlebars = require('handlebars');
const hbtmd = require('metalsmith-hbt-md');
const chokidar = require('chokidar');
const sass = require('metalsmith-sass');
const spawn = require('child_process').spawn;

function buildSite() {
  Metalsmith(__dirname)
    // Setting the Metadata
    .metadata({
      // add any variable you want use them in layout-files
      sitename: 'Design Manufacturing Futures Hub',
      siteurl: 'http://example.com/',
      description: 'A Hub of Design & Manufacturing Research and Teaching Groups',
      generatorname: 'Metalsmith',
      generatorurl: 'http://metalsmith.io/'
    })
    // Setting the source directory
    .source('./src')
    // Setting the out[ut to the build directory
    .destination('./docs')
    // enable collections
    .use(collections())
    // gather the layouts
    .use(layouts({
      // use the handlebars layout engine
      engine: 'handlebars',
      // provide directory to the partial templates
      partials: './layouts/partials'
    }))
    // allow handlebars within markdown
    .use(hbtmd(handlebars, {
      pattern: '**/*.html'
    }))
    .use(sass({
      outputStyle: "expanded"
    }))
    .clean(true)
    // run build
    .build((err) => {
      if (err) throw err;
    });
}

// Perform build at the start
//console.log('Building Site');
//buildSite();

// Spawn HTTP Server
//const httpserver = spawn('node', ['-v']);
// windows only
const httpserver = spawn('cmd', ['/c', 'http-server', '.\\docs']);

httpserver.stdout.on('data', (data) => {
  console.log(`http-server out:\n${data}`);
});

httpserver.stderr.on('data', (data) => {
  console.log(`http-server error:\n${data}`);
});


httpserver.on('close', (code) => {
  console.log(`child process exited with code:\n${code}`);
});

// Watch for file updates and then run build

console.log('Watching Source Files...');

chokidar.watch('./layouts/**/*', {}).on('change', (filePath, details) => {
  console.log('Building');
  buildSite();
  console.log('Watching Source Files...');
});

chokidar.watch('./src/**/*', {}).on('change', (filePath, details) => {
  console.log('Building');
  buildSite();
  console.log('Watching Source Files...');
});
