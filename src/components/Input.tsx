interface InputProps {
    Incompletes: string[];
    onClickComplete: (index: number) => void;
    onClickTodoDelete: (index: number) => void;
}

export const Input: React.FC<InputProps> = ({ Incompletes, onClickComplete, onClickTodoDelete }) => {

    return (
        <div className='mx-2 rounded-md border-2 border-teal-400 py-2'>
        <p className='text-xl font-bold text-center'>未完了のTODO</p>
        <ul className='flex-col items-center mx-2 gap-2'>
          {Incompletes.map((todo, index) => (
              <li key={index} className='flex items-center gap-2'>
                <p className="flex-grow">{todo}</p>
                <button className="bg-gray-200 my-2 hover:bg-gray-300" onClick={() => onClickComplete(index)}>完了</button>
                <button className="bg-gray-200 hover:bg-gray-300" onClick={() => onClickTodoDelete(index)}>削除</button>
              </li>
            ))}
        </ul>
      </div>
    );
};
