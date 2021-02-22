# with-component-hooks

use React hooks in class component

## install & useage

`npm install --save with-component-hooks`

## Part 1

Use `withComponentHooks` as `React.ElementType`

```ts
interface Props {
  children: () => React.ReactNode;
}
```

```tsx
import withComponentHooks from "with-component-hooks";

export default class MyComponent extends React.Component {
  render() {
    return (
      <withComponentHooks>
        {() => {
          const [counter, set] = React.useState(0);

          //TODO...

          return <div>{counter}</div>;
        }}
      </withComponentHooks>
    );
  }
}
```

## Part 2

Use hooks in render method

```tsx
import withComponentHooks from "with-component-hooks";

class MyComponent extends React.Component {
  render() {
    const [counter, set] = React.useState(0);

    //TODO...

    return <div>{counter}</div>;
  }
}

export default withComponentHooks(MyComponent);
```

Use decorator

```tsx
import withComponentHooks from "with-component-hooks";

@withComponentHooks
export default class MyComponent extends React.Component {
  render() {
    const [counter, set] = React.useState(0);

    //TODO...

    return <div>{counter}</div>;
  }
}
```
