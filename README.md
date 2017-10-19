# audiate

A simple library to indicate audio is present on desktop, and to present a tap to enable for audio on mobile.

## Usage

```
yarn add audiate
```

```javascript
import audiate from 'audiate';

const someSound = new Sound;

audiate(() => 
  sound.play()
);
```

## Customizing

![](http://static.damonzucconi.com/_capture/7FOOEopK3O.png)

By default `audiate` renders the `Speaker With Three Sound Waves` emoji 🔊 to indicate sound is playing or available to play.

The default stylesheet can be overridden using the class names `Audiate` which is always present. `AudiateTouch` and `AudiateSound` are attached to touch and desktop respectively. The default stylesheet can be found here [lib/stylesheet.js](https://github.com/dzucconi/audiate/blob/master/lib/stylesheet.js)
