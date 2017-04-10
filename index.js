'use strict';

const Metalsmith  = require('metalsmith');
// let markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const collections = require('metalsmith-collections');
const handlebars = require('handlebars');
const hbtmd = require('metalsmith-hbt-md');
const chokidar = require('chokidar');
const sass = require('metalsmith-sass');
//const rootPath = require('metalsmith-rootpath');
//const links = require('metalsmith-relative-links');
//let replace = require('metalsmith-regex-replace');


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
    // custom relative paths
    /* .use(function(files, metalsmith, done){
      for(var file in files){
        console.log(file)
        file.link =
      }
      done();
    }) */
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

console.log('Building');

buildSite();

console.log('Watching');

chokidar.watch('./layouts/**/*', {}).on('change', (filePath, details) => {
  console.log('Building');
  buildSite();
  console.log('Watching');
});

chokidar.watch('./src/**/*', {}).on('change', (filePath, details) => {
  console.log('Building');
  buildSite();
  console.log('Watching');
});
