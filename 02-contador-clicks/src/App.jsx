import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  const handleDelete = () => {
    setCounter(0)
  }

  return (
    <div className="text-2xl flex flex-col border-2 border-white rounded-md p-10">
      <div className='text-center font-bold'>
        <h1 className='mb-2'>Your counter is: </h1>
        <span className='text-5xl'>{counter}</span>
      </div>
      <div className="mt-5 flex flex-col gap-y-2 justify-between">
        <button className='border-2 border-white px-3 p-1 rounded-md' onClick={handleClick}>Click</button>
        <button className='border-2 border-white px-3 p-1 rounded-md' onClick={handleDelete}>Restart</button>
      </div>
    </div>
  )
}

export default App
