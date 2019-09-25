# audiate

[![npm](https://img.shields.io/npm/v/audiate)](https://www.npmjs.com/package/audiate)

## What is this?

A simple library to indicate autoplaying audio content is present, and to detect and present some UI to begin playback if it's been blocked by Chrome's autoplay policy.

## Why should I use this?

- Chrome has recently [changed their autoplaying media policy](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes). It is confusing/unpredictable and detecting ability to autoplay is inconsistent.
- You have an app that autoplays audio immediately and want to give some indication to the user if it has been muted.
- You probably shouldn't: Just build some kind of interaction into your app that triggers the playback in a natural fashion.

## Installation

```bash
yarn add audiate
```

## Usage

### `ambient`

If you want to automatically detect whether or not audio is muted by the [MEI](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes) and ambiently pop up a 🔇 indication but otherwise let interaction continue as normal. Any click/tap anywhere on the page after this should enable audio.

```javascript
import { ambient } from "audiate";

// Include somewhere in initialization
ambient();
```

#### Options

| Name         | Description                                                                                                                                              | Default value           |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `stylesheet` | The default stylesheet can be overridden by passing the `stylesheet` option and targeting the class names: `Audiate`, `AudiateClick` and `AudiateSound`. | See `lib/stylesheet.ts` |

### `block`

If you want to automatically detect whether or not audio is muted by the [MEI](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes) and present a blocking screen, suspending further interaction. This screen is skipped if audio is already enabled.

```javascript
import { block } from "audiate";

block({
  onEnable: () => {
    // Initialize audio playback
  }
});
```

#### Options

| Name            | Description                                                                                                                                              | Default value                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `clickToEnable` | Setting this to false will cause the blocking enable screen to only be enabled on mobile                                                                 | `true`                         |
| `stylesheet`    | The default stylesheet can be overridden by passing the `stylesheet` option and targeting the class names: `Audiate`, `AudiateClick` and `AudiateSound`. | See `lib/stylesheet.ts`        |
| `onEnable`      | Function that runs once blocking enable screen is tapped/clicked                                                                                         | `noop`                         |
| `message`       | Message presented to the user at block screen                                                                                                            | `'Tap\|Click to enable audio'` |
