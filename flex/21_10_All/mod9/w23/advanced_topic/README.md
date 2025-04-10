# Intro to TypeScript

[Video](https://vimeo.com/1074153475/d93a07b6fc)  

- [x] What is TypeScript, how does it work, and what problem does it solve?
- [x] Adding TypeScript to a Project / Tooling
- [x] Primitives, Unions, Type Inference and Type: Any
- [x] Arrays and Tuples
- [x] Functions
- [x] Objects
- [x] Type Aliases
- [x] Narrowing and Type Assertions
- [x] Tips for Learning Typescript
- [x] Extra Goodies

## What is TypeScript

- Superset of JavaScript
- Any valid JavaScript is also valid TypeScript
- Implementing a strict(er) type system into JavaScript

## Workflow

- Write TypeScript
- TypeScript compiler reads code and checks for errors
- Output vanilla JavaScript on success

## Adding TypeScript to a Project / Tooling

- npm install typescript --save-dev
- tsconfig.json - configuration options
- TSCONFIG bases @tsconfig
  - https://github.com/tsconfig/bases

## Primitives

- primitives.ts

## Arrays and Tuples

- arrays.ts

## Functions

- functions.ts

## Objects

objects.ts

## Narrowing

- Narrowing is when we use code to eliminate type possibilities
- TypeScript it is smart enough to read control flow and know when type possibilities go away
- https://www.typescriptlang.org/docs/handbook/2/narrowing.html

## Tips for Learning TypeScripting

- It can be a little infuriating at first
- Productivity will drop at first then rise and surpass
- Not recommended for final
- You can convert JS projects to TS incrementally
- There's lots more

## Other Goodies

- React component

```tsx
type MyComponentProps = {
  name: string;
  isActive: boolean;
};

export const MyComponent = (props: MyComponentProps) => {
  const [active, setActive] = useState(props.isActive);
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <>
      <h1>{props.name}</h1>
      <form>
        <input value={value} />
      </form>
    </>
  );
};

<MyComponent name={"David"} isActive={false} />;
```