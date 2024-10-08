import React from 'react'
import { Bell } from 'lucide-react'

const PersonalizedReviewReminder: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Bell className="w-5 h-5 mr-2 text-yellow-500" />
        个性化复习提醒
      </h3>
      <p className="text-sm mb-2">下次建议复习时间：明天 14:00</p>
      <ul className="list-disc list-inside text-sm">
        <li>第三章：人物关系网络</li>
        <li>第五章：关键转折点</li>
      </ul>
      <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
        设置提醒
      </button>
    </div>
  )
}

export default PersonalizedReviewReminder