var require = meteorInstall({"lib":{"template.home.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/template.home.js                                              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     // 1
Template.__checkName("home");                                        // 2
Template["home"] = new Template("Template.home", (function() {       // 3
  var view = this;                                                   // 4
  return HTML.Raw('<h1>iphone-inline-video meteor test</h1>\n	<br>\n	<a href="/video">Click Here to test the video</a>');
}));                                                                 // 6
                                                                     // 7
///////////////////////////////////////////////////////////////////////

},"template.index.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/template.index.js                                             //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     // 1
Template.body.addContent((function() {                               // 2
  var view = this;                                                   // 3
  return Spacebars.include(view.lookupTemplate("layout"));           // 4
}));                                                                 // 5
Meteor.startup(Template.body.renderToDocument);                      // 6
                                                                     // 7
Template.__checkName("layout");                                      // 8
Template["layout"] = new Template("Template.layout", (function() {   // 9
  var view = this;                                                   // 10
  return Blaze._TemplateWith(function() {                            // 11
    return {                                                         // 12
      template: Spacebars.call(view.lookup("main"))                  // 13
    };                                                               // 14
  }, function() {                                                    // 15
    return Spacebars.include(function() {                            // 16
      return Spacebars.call(Template.__dynamic);                     // 17
    });                                                              // 18
  });                                                                // 19
}));                                                                 // 20
                                                                     // 21
///////////////////////////////////////////////////////////////////////

},"template.video.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/template.video.js                                             //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     // 1
Template.__checkName("video");                                       // 2
Template["video"] = new Template("Template.video", (function() {     // 3
  var view = this;                                                   // 4
  return HTML.Raw('<video autoplay="" muted="" loop="" webkit-playsinline="" src="https://rawgit.com/bower-media-samples/big-buck-bunny-480p-30s/master/video.mp4" type="video/mp4"></video>');
}));                                                                 // 6
                                                                     // 7
///////////////////////////////////////////////////////////////////////

}},"client":{"routes.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/routes.js                                                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
FlowRouter.route('/', {                                              // 1
  action: function action() {                                        // 2
    BlazeLayout.render('layout', { main: 'home' });                  // 3
  }                                                                  // 4
});                                                                  // 1
                                                                     //
FlowRouter.route('/video', {                                         // 7
  action: function action() {                                        // 8
    BlazeLayout.render('layout', { main: 'video' });                 // 9
  }                                                                  // 10
});                                                                  // 7
///////////////////////////////////////////////////////////////////////

},"main.js":["iphone-inline-video",function(require){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var makeVideoPlayableInline = require('iphone-inline-video');        // 1
                                                                     //
Template.video.onRendered(function () {                              // 3
  this.autorun(function () {                                         // 4
    var video = document.querySelector('video');                     // 5
    makeVideoPlayableInline(video, false);                           // 6
  });                                                                // 7
});                                                                  // 8
///////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html"]});
require("./lib/template.home.js");
require("./lib/template.index.js");
require("./lib/template.video.js");
require("./client/routes.js");
require("./client/main.js");