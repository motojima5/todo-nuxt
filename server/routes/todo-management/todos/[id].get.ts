import { ReturnJSONTodos, Todo } from "~~/interfaces";

export default defineEventHandler(async (event): Promise<ReturnJSONTodos> => {
  let resultVal = 0;
  const todoListArray: Todo[] = [];

  // throw createError("疑似エラー発生")
  try {
    const params = event.context.params;
    let todoList = new Map<number, Todo>();
    const storage = useStorage();
    const todoListStorage = await storage.getItem(
      "local:todo-management_todos"
    );
    if (todoListStorage != undefined) {
      todoList = new Map<number, Todo>(todoListStorage as any);
    }
    if (params != undefined) {
      const idNo = Number(params!.id);
      const todo = todoList.get(idNo) as Todo;
      resultVal = 1;
      if (todo != undefined) {
        todoListArray[0] = todo;
      }
    }
  } catch (err) {
    console.log(err);
  }

  return {
    result: resultVal,
    data: todoListArray,
  };
});
