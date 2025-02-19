import { type TodoId, type Todo as TodoType } from '../types/types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleted }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={(event) => {
          onToggleCompleted({ id, completed: event.target.checked })
        }}
        id={id}
      />
      <label htmlFor="">{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemoveTodo({ id })
        }}
      />
    </div>
  )
}
