import { NextPage } from "next";
import { Heading, TodoList } from "nextjs-yarn-workspaces-sample-ui";
import { useCounter } from "nextjs-yarn-workspaces-sample-module";

const IndexPage: NextPage = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <Heading>Hello World</Heading>

      <h2>Counter</h2>
      <div>
        <div>Count: {count}</div>
        <br />
        <button onClick={() => increment()}>UP</button>
        <button onClick={() => decrement()}>DOWN</button>
      </div>

      <h2>Todo</h2>
      <TodoList />
    </div>
  );
};

export default IndexPage;
