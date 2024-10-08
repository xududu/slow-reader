import React from 'react'
import { Lightbulb } from 'lucide-react'

const PracticalApplicationSuggestions: React.FC = () => {
  const suggestions = [
    '尝试应用书中的时间管理技巧，制定每日计划',
    '练习书中描述的冥想方法，每天坚持10分钟',
    '使用作者推荐的沟通策略改善一段重要关系'
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Lightbulb className="w-5 h-5 mr-2 text-orange-500" />
        实践应用建议
      </h3>
      <ul className="list-disc list-inside text-sm">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="mb-1">{suggestion}</li>
        ))}
      </ul>
      <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 text-sm">
        设置行动目标
      </button>
    </div>
  )
}

export default PracticalApplicationSuggestions