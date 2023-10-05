import * as React from "react";

export const TodoContext = React.createContext<any>([]);

function TodoContextProvider(props: any) {
  const [todoData, setTodoData] = React.useState([]);

  return (
    <TodoContext.Provider
      value={{
        todoData,
        setTodoData,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
export default TodoContextProvider;
