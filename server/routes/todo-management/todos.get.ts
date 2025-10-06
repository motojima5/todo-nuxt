import { ReturnJSONTodos, Todo } from "~~/interfaces";

export default defineEventHandler(async (event): Promise<ReturnJSONTodos> => {
  console.log("todos.get");
  let todoList = new Map<number, Todo>();
  let resultVal = 0;

  // throw createError("疑似エラー発生")
  try {
    const storage = useStorage();
    const todoListStorage = await storage.getItem(
      "local:todo-management_todos"
    );
    // throw createError("疑似エラー発生")
    if (todoListStorage != undefined) {
      todoList = new Map<number, Todo>(todoListStorage as any);
    }
    resultVal = 1;
  } catch (err) {
    console.log(err);
  }

  const todoListValues = todoList.values();
  const todoListArray = Array.from(todoListValues);
  return {
    result: resultVal,
    data: todoListArray,
  };
});
