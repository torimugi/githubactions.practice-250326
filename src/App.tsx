import { useState } from "react";
import "tailwindcss";

export const App = () => {
const [ TodoText, setTodoText ] = useState("")

 const [ Incompletes, setIncompletes ] = useState([
  "TODOです1", 
  "TODOです2"
]);

const [ Completes, setCompletes ] = useState([
  "TODOでした1", 
  "TODOでした2"
]);

const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => setTodoText(event.target.value);

const handleAddTodo = () => {
const newTodo = [...Incompletes, TodoText];
setIncompletes(newTodo)
};
console.log(handleAddTodo);




  return (
    <>
    <div className="flex flex-col gap-y-6">
      <div className='mx-2 bg-teal-400 p-2 rounded-md gap-2 flex'>
        <input 
        type="text" 
        placeholder="TODOを入力" 
        className="p-2 bg-white" 
        value={TodoText}
        onChange={onChangeTodoText}/>
        <button onClick={handleAddTodo}
        className="bg-gray-200 rounded-md px-4 py-2 hover:bg-gray-300">追加</button>
      </div>
      <div className='mx-2 rounded-md border-2 border-teal-400 py-2'>
        <p className='text-xl font-bold text-center'>未完了のTODO</p>
        <ul className='flex-col items-center mx-2 gap-2'>
          {Incompletes.map((todo) => (
              <li key={todo} className='flex items-center gap-2'>
              <p className="flex-grow">{todo}</p>
              <button className="bg-gray-200 my-2 hover:bg-gray-300">完了</button>
              <button className="bg-gray-200 hover:bg-gray-300">削除</button>
              </li>
          ))}
        </ul>
      </div>
      
      <div className='mx-2 rounded-md border-2 bg-teal-400 border-teal-400 py-2'>
        <p className='text-xl font-bold text-center'>完了のTODO</p>
        <ul className='flex-col items-center mx-2 gap-2'>
          {Completes.map((todo) => (
              <li key={todo} className='flex items-center gap-2'>
              <p className="flex-grow">{todo}</p>
              <button className="bg-gray-200 my-2 hover:bg-gray-300">戻す</button>
              </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default App