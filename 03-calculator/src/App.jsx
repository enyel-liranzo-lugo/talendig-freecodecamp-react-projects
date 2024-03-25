import { useState } from 'react'
import { evaluate } from 'mathjs'

const numbers = [
  [1], [2], [3],
  [4], [5], [6],
  [7], [8], [9],
  ['='], [0], ['.']
]

const operations = [
  ['+'], ['-'],
  ['*'], ['/']
]

function App() {
  const [input, setInput] = useState('')

  const addInputNumber = (e) => {
    const value = e.target.getAttribute('data-value')
    setInput(input + value)
  }

  const addOperator = (e) => {
    const value = e.target.getAttribute('data-value')
    setInput(input + value)
  }

  const handleResult = () => {
    if (input) {
      setInput(evaluate(input).toFixed(2))
    } else {
      alert('Añade números primero!')
    }
  }

  const handleDelete = () => {
    setInput('')
  }

  return (
    <div className="font-bold text-3xl">

      <div className="mb-2 flex flex-row items-center justify-end rounded-md border-white border-2 w-[290px] h-[70px] px-2 overflow-x-auto">
        {input}
      </div>

      <div className="grid grid-flow-col">
        <div className="grid grid-cols-3 text-center">
          {
            numbers.map((number, index) => {
              return (
                <button onClick={(index === 9) ? handleResult : addInputNumber} data-value={number} className="p-5 m-1 rounded-md cursor-pointer border-white border-2" key={index}>{number}</button>
              )
            })
          }
        </div>
        <div className="flex flex-col justify-around">
          {
            operations.map((op, index) => {
              return (
                <button
                  onClick={addOperator}
                  data-value={op}
                  key={index}
                  className="p-5 text-center w-[70px] rounded-md cursor-pointer border-white border-2 bg-gray-300 text-slate-900 hover:bg-gray-500 transition-colors"
                >
                  {op}
                </button>
              )
            })
          }
        </div>
      </div>
      <div>
        <button onClick={handleDelete} className='bg-gray-200 w-full text-center p-2 rounded-md text-slate-900 text-sm hover:bg-gray-400 transition-colors'>
          Clear
        </button>
      </div>
    </div>
  )
}

export default App
