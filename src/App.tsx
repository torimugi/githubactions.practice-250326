import "tailwindcss";

const App = () => {
  return (
    <>
    <div className="flex flex-col gap-y-6">
      <div className='mx-2 bg-teal-400 p-2 rounded-md gap-2 flex'>
        <input type="text" placeholder="TODOを入力" className="p-2 bg-white"/>
        <button className="bg-gray-200 rounded-md px-4 py-2 hover:bg-gray-300">追加</button>
      </div>
      <div className='mx-2 rounded-md border-2 border-teal-400 py-2'>
        <p className='text-xl font-bold text-center'>未完了のTODO</p>
        <ul className='flex items-center mx-2 gap-2'>
          <li className='flex-grow'>TODOです</li>
          <button className="bg-gray-200 my-2 hover:bg-gray-300">完了</button>
          <button className="bg-gray-200 hover:bg-gray-300">削除</button>
        </ul>
        <ul className='flex items-center mx-2 gap-2'>
          <li className='flex-grow'>TODOです</li>
          <button className="bg-gray-200 my-2 hover:bg-gray-300">完了</button>
          <button className="bg-gray-200 hover:bg-gray-300">削除</button>
        </ul>
      </div>
      <div className='mx-2 rounded-md border-2 bg-teal-400 border-teal-400 py-2'>
        <p className='text-xl font-bold text-center'>完了のTODO</p>
        <ul className='flex items-center mx-2 gap-2'>
          <li className='flex-grow'>TODOでした</li>
          <button className="bg-gray-200 my-2 hover:bg-gray-300">完了</button>
          <button className="bg-gray-200 hover:bg-gray-300">戻す</button>
        </ul>
        <ul className='flex items-center mx-2 gap-2'>
          <li className='flex-grow'>TODOでした</li>
          <button className="bg-gray-200 hover:bg-gray-300">完了</button>
          <button className="bg-gray-200 hover:bg-gray-300">戻す</button>
        </ul>
      </div>
    </div>
    </>
  )
}

export default App