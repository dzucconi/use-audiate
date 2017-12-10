# audiate

## What is this?

A simple library to indicate audio is present on desktop, and to present a tap to enable for audio on mobile which requires a user gesture to begin playback.

## Why should I use this?

* You have an app that autoplays audio immediately and want to give some indication to the user.
* You touch devices to be detected and present a UI element that when tapped enables audio and begins playback.

## Usage

```
yarn add audiate
```

```javascript
import audiate from 'audiate';

audiate(() => 
  yourAutoPlayingInitialization()
);
```

## Customization

By default `audiate` renders the `Speaker With Three Sound Waves` emoji 🔊 to indicate sound is playing or available to play.

The default stylesheet can be overridden using the class names `Audiate` which is always present. `AudiateTouch` and `AudiateSound` are attached to touch and desktop respectively. The default stylesheet can be found here [lib/stylesheet.js](https://github.com/dzucconi/audiate/blob/master/lib/stylesheet.js)

![](http://static.damonzucconi.com/_capture/7FOOEopK3O.png)
