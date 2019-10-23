# use-audiate

[![npm](https://img.shields.io/npm/v/use-audiate)](https://www.npmjs.com/package/use-audiate)

## What is this?

A React hook to detect and enable auto-playing audio content if it has been blocked by [Chrome's autoplay policy](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes).

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
