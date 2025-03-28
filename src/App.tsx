import React from 'react'

const App = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul className='flex mx-2 gap-2'>
          <li className='flex-grow'>TODOです</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div>
        <p>完了したTODO</p>
        <ul>
          <li>TODOです</li>
          <button>戻す</button>
          <button>削除</button>
        </ul>
      </div>
    </>
  )
}

export default App