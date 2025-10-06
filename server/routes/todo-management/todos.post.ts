import { ReturnJSONTodos, Todo } from "~~/interfaces";

export default defineEventHandler(async (event): Promise<ReturnJSONTodos> => {
  console.log("todos.post");
  let resultVal = 0;
  const todoListArray: Todo[] = [];

  try {
    const body = await readBody(event);
    const todo = body as Todo;
    let todoList = new Map<number, Todo>();
    const storage = useStorage();
    const todoListStorage = await storage.getItem(
      "local:todo-management_todos"
    );
    if (todoListStorage != undefined) {
      todoList = new Map<number, Todo>(todoListStorage as any);
    }
    todoList.set(todo.id, todo);
    await storage.setItem("local:todo-management_todos", [...todoList]);
    todoListArray[0] = todo;
    resultVal = 1;
  } catch (err) {
    console.log(err);
  }

  return {
    result: resultVal,
    data: todoListArray,
  };
});
