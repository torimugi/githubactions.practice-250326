import React from "react";

type Props = {
  todos: string[];
  handleComplete:  (index: number) => void;
  handleDelete:  (index: number) => void;
}

export const IncompleteTodo: React.FC<Props> = ({ todos, handleComplete, handleDelete }) => {
  return(
<div className='rounded-md border-2 border-teal-400 py-2'>
<p className='text-xl font-bold text-center'>未完了のTODO</p>
<ul className='flex-col items-center mx-2'>
  {todos.map((todo , index) => (
      <li key={todo} className='flex items-center gap-2'>
      <p className="flex-grow">{todo}</p>
      <button onClick={() => handleComplete(index)}
      className="bg-gray-200 my-2 hover:bg-gray-300">完了</button>
      <button onClick={() => handleDelete(index)} 
      className="bg-gray-200 hover:bg-gray-300">削除</button>
      </li>
  ))}
</ul>
</div>
)
}