import React from 'react'
import { Award, Clock } from 'lucide-react'

const ReadingChallenge: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Award className="w-5 h-5 mr-2 text-yellow-500" />
        虚拟阅读挑战赛
      </h3>
      <div className="mb-4">
        <h4 className="font-medium text-sm mb-1">当前挑战：30天读书马拉松</h4>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2 text-blue-500" />
          <span className="text-sm">剩余时间：15天</span>
        </div>
      </div>
      <div className="bg-gray-100 rounded p-2">
        <h4 className="font-medium text-sm mb-1">排行榜</h4>
        <ol className="list-decimal list-inside text-sm">
          <li>阅读达人 - 1500页</li>
          <li>书虫小王 - 1200页</li>
          <li>文学爱好者 - 1000页</li>
        </ol>
      </div>
    </div>
  )
}

export default ReadingChallenge