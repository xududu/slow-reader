import React from 'react'
import { Network } from 'lucide-react'

const ConceptMap: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Network className="w-5 h-5 mr-2 text-purple-500" />
        概念图谱生成器
      </h3>
      <p className="text-sm text-gray-600 mb-4">这里将显示书中关键概念的关系图。</p>
      <div className="bg-gray-100 h-48 flex items-center justify-center rounded">
        <span className="text-gray-500">概念图谱将在这里生成</span>
      </div>
    </div>
  )
}

export default ConceptMap