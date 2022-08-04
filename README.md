# use-unload-beacon

![](https://badgen.net/badge/license/MIT/blue) ![](https://badgen.net/npm/types/tslib) ![](https://badgen.net/npm/v/use-unload-beacon) ![](https://badgen.net/bundlephobia/min/use-unload-beacon)

React hook that sends an HTTP POST request containing a small amount of data when a page gets fully unloaded.

## Install

```bash
$ npm install use-unload-beacon
```

## Usage

```js
import useUnloadBeacon from "use-unload-beacon";

export default function App() {
  useUnloadBeacon("/api/trackunload", () =>
    JSON.stringify({
      some: "data",
    })
  );

  return <>...</>;
}
```

## API

### useUnloadBeacon(Url, BodyInit)

#### BodyInit

**Type:** `string`

#### BodyInit

**Type:** `string | ReadableStream | Blob | BufferSource | FormData | URLSearchParams`

or

**Type:** `(event: Event) => BodyInit`

## License

The MIT License.

## Maintainers

- [Henrik Wenz](https://github.com/handtrix)
