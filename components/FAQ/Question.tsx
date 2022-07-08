import { useCallback, useState } from 'react'

import Minus from '../Icons/Minus'
import Plus from '../Icons/Plus'

import QuestionType from '../../types/question'

const Question = ({ title, description }: QuestionType) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = useCallback(() => setIsOpen((prev) => !prev), [isOpen])

  return (
    <button
      onClick={handleClick}
      className="w-full overflow-y-hidden text-start"
    >
      <div className="flex justify-between">
        <h3 className="text-2xl text-primary/75">{title}</h3>
        {isOpen ? <Minus /> : <Plus />}
      </div>
      {isOpen && <p className="mt-3">{description}</p>}
    </button>
  )
}

export default Question
