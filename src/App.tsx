import "tailwindcss";

const App = () => {
  return (
    <>
    <div>
      <div className='mx-2 bg-teal-400 p-2 rounded-md gap-2 flex'>
        <input type="text" placeholder="TODOを入力" className="p-2 bg-white"/>
        <button className="bg-gray-200 rounded-md px-4 py-2">追加</button>
      </div>
      <div className='mx-2 rounded-md border-2 border-teal-400'>
        <p className='text-xl font-bold'>未完了のTODO</p>
        <ul className='flex items-center mx-2 gap-2'>
          <li className='flex-grow'>TODOです</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div className='mx-2'>
        <p className='text-xl font-bold'>完了したTODO</p>
        <ul className='flex items-center mx-2 gap-2'>
          <li className='flex-grow'>TODOでした</li>
          <button>戻す</button>
        </ul>
      </div>
    </div>
    </>
  )
}

export default App