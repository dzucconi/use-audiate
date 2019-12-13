# use-audiate

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![npm](https://img.shields.io/npm/v/use-audiate)](https://www.npmjs.com/package/use-audiate) [![Build Status](https://travis-ci.org/dzucconi/use-audiate.svg?branch=master)](https://travis-ci.org/dzucconi/use-audiate)

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
