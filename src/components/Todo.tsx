interface TodoProps {
    todoText: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

export const Todo: React.FC<TodoProps> = ({ todoText, onChange, onClick }) => {

return(
    <div className='mx-2 bg-teal-400 p-2 rounded-md gap-2 flex'>
    <input type="text" placeholder="TODOを入力" className="p-2 bg-white" value={todoText} onChange={onChange} />
    <button className="bg-gray-200 rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300" onClick={onClick}>追加</button>
  </div>
);
};