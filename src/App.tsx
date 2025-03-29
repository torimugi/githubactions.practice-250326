import "tailwindcss";

const App = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className='mx-2'>
        <p className='text-2xl font-bold'>未完了のTODO</p>
        <ul className='flex items-center mx-2 gap-2'>
          <li className='flex-grow'>TODOです</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div>
        <p>完了したTODO</p>
        <ul className='flex items-center mx-2 gap-2'>
          <li className='flex-grow'>TODOでした</li>
          <button>戻す</button>
        </ul>
      </div>
    </>
  )
}

export default App