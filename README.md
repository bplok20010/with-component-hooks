# with-component-hooks

Use React hooks in class component

## install & useage

`npm install --save with-component-hooks`

## Part 1

Use `WithComponentHooks` as `React.ElementType`

```ts
interface Props {
  children: () => React.ReactNode;
}
```

```tsx
import WithComponentHooks from "with-component-hooks";

export default class MyComponent extends React.Component {
  render() {
    return (
      <WithComponentHooks>
        {() => {
          const [counter, set] = React.useState(0);

          //TODO...

          return <div>{counter}</div>;
        }}
      </WithComponentHooks>
    );
  }
}
```

## Part 2

Use hooks in render method

```tsx
import WithComponentHooks from "with-component-hooks";

class MyComponent extends React.Component {
  render() {
    const [counter, set] = React.useState(0);

    //TODO...

    return <div>{counter}</div>;
  }
}

export default WithComponentHooks(MyComponent);
```

Use decorator

```tsx
import WithComponentHooks from "with-component-hooks";

@WithComponentHooks
export default class MyComponent extends React.Component {
  render() {
    const [counter, set] = React.useState(0);

    //TODO...

    return <div>{counter}</div>;
  }
}
```
