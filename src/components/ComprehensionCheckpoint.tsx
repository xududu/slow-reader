import React, { useState } from 'react'
import { HelpCircle } from 'lucide-react'

const ComprehensionCheckpoint: React.FC = () => {
  const [showQuestion, setShowQuestion] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const question = "主人公面临的主要挑战是什么？"
  const answers = [
    "经济困难",
    "家庭矛盾",
    "社会压力",
    "个人成长"
  ]

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <HelpCircle className="w-5 h-5 mr-2 text-purple-500" />
        阅读理解检查点
      </h3>
      {!showQuestion ? (
        <button
          onClick={() => setShowQuestion(true)}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          开始检查
        </button>
      ) : (
        <div>
          <p className="mb-2 text-sm font-medium">{question}</p>
          <ul className="space-y-2">
            {answers.map((answer, index) => (
              <li key={index}>
                <button
                  onClick={() => handleAnswerSelect(answer)}
                  className={`w-full text-left px-3 py-2 rounded ${
                    selectedAnswer === answer
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ComprehensionCheckpoint