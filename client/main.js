const makeVideoPlayableInline = require('iphone-inline-video');

Template.video.onRendered(function() {
  this.autorun(() => {
  var video = document.querySelector('video');
  makeVideoPlayableInline(video, false);
  });
});