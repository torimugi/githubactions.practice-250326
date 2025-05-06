export const InputTodo = (props) => {
    return (
        <div >
        <input 
        type="text" 
        placeholder="TODOを入力" 
        className="p-2 bg-white" 
        value={TodoText}
        onChange={onChangeTodoText}/>
        <button onClick={handleAddTodo}
        className="bg-gray-200 rounded-md px-4 py-2 hover:bg-gray-300">追加</button>
      </div>
    );
};