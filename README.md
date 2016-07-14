# iphone-inline-video-meteor-test

### This is a test project for using the [iphone-inline-video](https://github.com/bfred-it/iphone-inline-video) with [Meteor](https://meteor.com)

See [Issue #59](https://github.com/bfred-it/iphone-inline-video/issues/59)

Copy the repo, then run it on iOS simulator:
```
meteor run ios
```

#### To reproduce the problem:
Start the app on an iOS device, click the link to go to the video page.

When you first go to it, the video opens in fullscreen. If you stay on that page and edit any document, it refreshed the page and will play inline. ( like add `<br />` to the html page and save it. )

This didn't happen when I had a bare install of Meteor, but once I added Kadira [Flow Router](https://github.com/kadirahq/flow-router), it started happening.

## Solution

Normally `.play()` makes the video go fullscreen, right? So IIV breaks that `.play()` and replaces it with a fake one that should never go fullscreen because the video never actually plays.

It looks like video.load() (called inside IIV's `.play()`) still triggers the native playback anyway, though. Which is ridiculous. `.load` should not `.play`.

Test:
```
  this.autorun(() => {
    var video = document.querySelector('video');
    video.load();
  });
 ```
Fullscreen playback can only ever happen when the action is user-initiated, in short now it's happening on click here and not when you just load the address `/video`

Anyway, even more ridiculously, the solution is to remove the autoplay attribute so that `.play()` isn't automatically called... and then call it right after.

```
this.autorun(() => {
    var video = document.querySelector('video');
    makeVideoPlayableInline(video, false);
    video.play();
});
```
