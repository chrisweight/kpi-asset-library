import { BusinessQuestion } from "@/model";

type BusinessQuestionCardProps = {
  question: BusinessQuestion;
}

export default function BusinessQuestionCard({ question }: BusinessQuestionCardProps) {
  const { title, description } = question;

  return (
    <div className="flex p-4 rounded-md h-auto hover:bg-gray-200">
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col align-middle justify-center">
          <p className="font-semibold text-black">{title}</p>
          <p className="text-gray-500 text-base">{description}</p>
        </div>
      </div>
    </div>
  )
}