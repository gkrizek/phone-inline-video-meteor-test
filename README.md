# iphone-inline-video-meteor-test

### This is a test project for using the [iphone-inline-video](https://github.com/bfred-it/iphone-inline-video) with [Meteor](https://meteor.com)

Copy the repo, then run it on iOS simulator:
```
meteor run ios
```

#### To reproduce the problem:
Start the app on an iOS device, click the link to go to the video page.

When you first go to it, the video opens in fullscreen. If you stay on that page and edit any document, it refreshed the page and will play inline. ( like add `<br />` to the html page and save it. )

This didn't happen when I had a bare install of Meteor, but once I added Kadira [Flow Router](https://github.com/kadirahq/flow-router), it started happening.