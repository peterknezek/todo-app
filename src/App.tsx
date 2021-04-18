import React from "react";

import Todo from './Todo';

// rework this into regular api call, feel free to use any open api
const getTodosService = (): Promise<{id: string; title: string;}[]> => new Promise((res) => {
  setTimeout(() => {
    res([
      {
        id: "1",
        title: "Go shopping",
      },
      {
        id: "2",
        title: "Job interview",
      },
      {
        id: "3",
        title: "Prepare homework",
      },
    ]);
  }, 100);
});

function App() {
  const [todoList, setTodoList] = React.useState<{ id: string; title: string }[]>([]);

  React.useEffect(() => {
    (async () => {
      const awaitedTodos = await getTodosService();
      setTodoList(awaitedTodos);
    })()
  },[])


  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;