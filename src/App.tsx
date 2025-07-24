import { useState } from "react";
import "tailwindcss";


export const App = () => {
  const [ inputTodo, setInputTodo ] = useState(["TODO1", "TODO2"]);
const [ completTodo, setCompletTodo ] = useState(["TODO1でした", "TODO2でした"]);

  return (
    <>
    <div className="flex flex-col gap-y-6">
      <div className='mx-2 bg-teal-400 p-2 rounded-md gap-2 flex'>
        <input type="text" placeholder="TODOを入力" className="p-2 bg-white"/>
        <button className="bg-gray-200 rounded-md px-4 py-2 hover:bg-gray-300">追加</button>
      </div>
      
      <div className='mx-2 rounded-md border-2 border-teal-400 py-2 min-h-100'>
        <p className='text-xl font-bold text-center my-2'>未完了のTODO</p>
        <ul className='flex-col items-center mx-2 gap-2'>
        {inputTodo.map((todo) => {
                return (
                  <li key={todo} className='flex items-center gap-2'>
                  <p className="flex-grow">{todo}</p>
                  <button className="bg-gray-200 my-2 hover:bg-gray-300">完了</button>
                  <button className="bg-gray-200 hover:bg-gray-300">削除</button>
                  </li>
                )
                  })}
        </ul>
      </div>
      
      <div className='mx-2 rounded-md border-2 bg-teal-400 border-teal-400 py-2 min-h-100'>
        <p className='text-xl font-bold text-center my-2'>完了のTODO</p>
        <ul className='flex-col items-center mx-2 gap-2'>
        {completTodo.map((todo) => {
                return (
                  <li key={todo} className='flex items-center gap-2'>
                  <p className="flex-grow">{todo}</p>
                  <button className="bg-gray-200 my-2 hover:bg-gray-300">戻す</button>
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