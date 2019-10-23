# use-audiate

[![npm](https://img.shields.io/npm/v/use-audiate)](https://www.npmjs.com/package/use-audiate)

## What is this?

A React hook interface for a [simple library](https://github.com/dzucconi/audiate) to indicate autoplaying audio content is present, and to detect and present some UI to begin playback if it's been blocked by Chrome's autoplay policy.

## Installation

```bash
yarn add use-audiate
```

## Usage

```javascript
import React from "react";
import { useAudiate } from "use-audiate";

const App: React.FC = () => {
  const [audioContextState, isEnabled] = useAudiate();
  return (
    <pre>
      <code>{JSON.stringify({ audioContextState, isEnabled })}</code>
    </pre>
  );
};
```
