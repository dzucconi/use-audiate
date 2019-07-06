# audiate

## What is this?

A simple library to indicate autoplaying audio content is present, and to present a click/tap to enable screen to begin playback.

## Why should I use this?

- Chrome has recently [changed their autoplaying media policy](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes). It is confusing/unpredictable and detecting ability to autoplay is inconsistent.
- You have an app that autoplays audio immediately and want to give some indication to the user.
- You touch devices to be detected and present a UI element that when tapped enables audio and begins playback.

## Installation

```bash
yarn add audiate
```

## Usage

```javascript
import audiate from "audiate";

audiate({
  onEnable: () => {
    // Initialize audio playback
  }
});
```

## Options

| Name            | Description                                                                                                                                              | Default value           |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `clickToEnable` | Setting this to false will cause the blocking enable screen to only be enabled on mobile                                                                 | `true`                  |
| `stylesheet`    | The default stylesheet can be overridden by passing the `stylesheet` option and targeting the class names: `Audiate`, `AudiateClick` and `AudiateSound`. | See `lib/stylesheet.js` |
| `onEnable`      | Function that runs once blocking enable screen is tapped/clicked                                                                                         | `noop`                  |
