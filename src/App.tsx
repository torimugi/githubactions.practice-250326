import { useState } from "react";
import "tailwindcss";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [inputTodo, setInputTodo] = useState<string[]>([]);
  const [completeTodo, setCompleteTodo] = useState<string[]>([]);

// 入力
const handleChangeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
setTodoText(e.target.value);
};

// 追加
const handleAddTodo = () => {
const newTodo = [...inputTodo, todoText];
setInputTodo(newTodo);
setTodoText("");
};

// 削除
const handleDeleteTodo = (index: number) => {
  const newTodo = [...inputTodo];
  newTodo.splice(index, 1);
  setInputTodo(newTodo);
};

// 完了
const handleCompleteTodo = (index: number) => {
  const newIncompleteTodo = [...inputTodo];
  newIncompleteTodo.splice(index, 1);
  setInputTodo(newIncompleteTodo);

  const newCompleteTodo = [...completeTodo, inputTodo[index]];
  setCompleteTodo(newCompleteTodo);
};

// 戻す
const handleBackTodo = (index: number) => {
  const newCompleteTodo = [...completeTodo];
  newCompleteTodo.splice(index, 1);
  setCompleteTodo(newCompleteTodo);

  const newIncompleteTodo = [...inputTodo, completeTodo[index]];
  setInputTodo(newIncompleteTodo);
};


  return (
    <>
      <div className="flex flex-col gap-y-6">
        <div className='mx-2 bg-teal-400 p-2 rounded-md gap-2 flex'>
          <input type="text" placeholder="TODOを入力" className="p-2 bg-white" value={todoText} onChange={handleChangeNewTodo}/>
          <button className="bg-gray-200 rounded-md px-4 py-2 hover:bg-gray-300" onClick={handleAddTodo}>追加</button>
        </div>

        <div className='mx-2 rounded-md border-2 border-teal-400 py-2 min-h-100'>
          <p className='text-xl font-bold text-center my-2'>未完了のTODO</p>
          <ul className='flex-col items-center mx-2 gap-2'>
            {inputTodo.map((todo, index) => {
              return (
                <li key={todo} className='flex items-center gap-2'>
                  <p className="flex-grow">{todo}</p>
                  <button className="bg-gray-200 my-2 hover:bg-gray-300" onClick={() => {handleCompleteTodo(index)}}>完了</button>
                  <button className="bg-gray-200 hover:bg-gray-300" onClick={() => {handleDeleteTodo(index)}}>削除</button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='mx-2 rounded-md border-2 bg-teal-400 border-teal-400 py-2 min-h-100'>
          <p className='text-xl font-bold text-center my-2'>完了のTODO</p>
          <ul className='flex-col items-center mx-2 gap-2'>
            {completeTodo.map((todo, index) => {
              return (
                <li key={todo} className='flex items-center gap-2'>
                  <p className="flex-grow">{todo}</p>
                  <button className="bg-gray-200 my-2 hover:bg-gray-300" onClick={() => {handleBackTodo(index)}}>戻す</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App;