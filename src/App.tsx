import { useState } from "react";
import "tailwindcss";
import { Todo } from "./components/Todo";
import { Input } from "./components/Input";
import { Complete } from "./components/Complete";

export const App = () => {
 const [ todoText, setTodoText ] = useState<string>("");
 const [ Incompletes, setIncompletes ] = useState<string[]>([]);
 const [ Completes, setCompletes ] = useState<string[]>([]);
  
//  入力フォーム
 const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value);

//  追加
const onClickAddTodo = () => {
  setIncompletes([...Incompletes, todoText]);
  setTodoText("");
 };

//  削除
 const onClickTodoDelete = (index: number) => {
const newTodos = [...Incompletes];
newTodos.splice(index, 1);
setIncompletes(newTodos);
 };
  
//  完了
const onClickComplete = (index: number) => {
const newCompletesTodos = [...Completes];
newCompletesTodos.push(Incompletes[index]);
const newInCompletesTodos = [...Incompletes];
newInCompletesTodos.splice(index, 1);
setCompletes(newCompletesTodos);
setIncompletes(newInCompletesTodos);
};

// 戻す
const onClickRevert = (index: number) => {
  const newCompletesTodos = [...Completes];
  newCompletesTodos.splice(index, 1);
  
  const newInCompletesTodos = [...Incompletes, Completes[index]];
  setCompletes(newCompletesTodos);
  setIncompletes(newInCompletesTodos);
};

 return (
    <>
    <div className="flex flex-col gap-y-6">

  <Todo 
  todoText={todoText} 
  onChange={onChangeTodo} 
  onClick={onClickAddTodo}
  />

<Input
Incompletes={Incompletes}
onClickTodoDelete={onClickTodoDelete}
onClickComplete={onClickComplete}
/>

<Complete
Completes={Completes}
onClick={onClickRevert}
/>

    </div>
    </>
  )
}

export default App;