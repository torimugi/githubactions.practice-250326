import { useState } from "react";
import "tailwindcss";
import { InputTodo } from "./components/input";
import { IncompleteTodo } from "./components/incompleteTodo";

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

// タスクの追加
const handleAddTodo = () => {
if (TodoText === "") return;
const newTodo = [...Incompletes, TodoText];
setIncompletes(newTodo);
setTodoText("")
};

// タスクの削除
const handleDelete = (index: number) => {
  const newTodo = [...Incompletes];
  newTodo.splice(index, 1);
  setIncompletes(newTodo);
};

// タスクの完了
const handleComplete = (index: number) => {
const newIncompleteTodo = [...Incompletes];
newIncompleteTodo.splice(index, 1);

const newCompleteTodo = [...Completes, Incompletes[index]];
setIncompletes(newIncompleteTodo);
setCompletes(newCompleteTodo);
};

// タスクを戻す
const handleRevert = (index: number) => {
const newRevertComplete = [...Completes];
newRevertComplete.splice(index, 1);

const newRevertInComplete = [...Incompletes, Completes[index]];
setCompletes(newRevertComplete);
setIncompletes(newRevertInComplete);
};

  return (
    <>
    <div className="flex flex-col gap-y-6">
      <div className='mx-2 bg-teal-400 p-2 rounded-md gap-2 flex'>

< InputTodo 
TodoText={TodoText} 
onChange={onChangeTodoText} 
onClick={handleAddTodo}
/>

<IncompleteTodo
todos={Incompletes}
handleComplete={handleComplete}
handleDelete={handleDelete}
  />


      
      <div className='mx-2 rounded-md border-2 bg-teal-400 border-teal-400 py-2'>
        <p className='text-xl font-bold text-center'>完了のTODO</p>
        <ul className='flex-col items-center mx-2 gap-2'>
          {Completes.map((todo, index) => (
              <li key={todo} className='flex items-center gap-2'>
              <p className="flex-grow">{todo}</p>
              <button onClick={() => handleRevert(index)} 
              className="bg-gray-200 my-2 hover:bg-gray-300">戻す</button>
              </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
    </>
  )
}

export default App;