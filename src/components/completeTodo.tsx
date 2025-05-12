import React from "react";

type Props = {
  todos: string[];
  handleRevert: (index: number) => void;
}

export const CompleteTodo: React.FC<Props> = ({ todos, handleRevert }) => {
    return(
        <div className='mx-2 rounded-md border-2 bg-teal-400 border-teal-400 py-2'>
        <p className='text-xl font-bold text-center'>完了のTODO</p>
        <ul className='flex-col items-center mx-2 gap-2'>
          {todos.map((todo, index) => (
              <li key={todo} className='flex items-center gap-2'>
              <p className="flex-grow">{todo}</p>
              <button onClick={() => handleRevert(index)} 
              className="bg-gray-200 my-2 hover:bg-gray-300">戻す</button>
              </li>
          ))}
        </ul>
      </div>
    )
}