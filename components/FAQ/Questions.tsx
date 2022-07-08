import QuestionType from '../../types/question'
import Question from './Question'

type Props = {
  question: QuestionType[]
}

const Questions = ({ question }: Props) => (
  <ul className="flex flex-col gap-y-8">
    {question.map(({ description, title }, i) => (
      <li key={i}>
        <Question description={description} title={title} />
      </li>
    ))}
  </ul>
)

export default Questions
