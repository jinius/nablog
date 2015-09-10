/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Post = require('../api/post/post.model');


Post.find({}).remove(function() {
  Post.create({
    title : 'Development Tools',
    content : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    title : 'Server and Client integration',
    content : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    title : 'Smart Build System',
    content : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    title : 'Modular Structure',
    content : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    title : 'Optimized Build',
    content : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    title : 'Deployment Ready',
    content : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});
