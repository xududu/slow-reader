import React, { useState } from 'react'
import { Gauge } from 'lucide-react'

const ReadingSpeedAdjuster: React.FC = () => {
  const [speed, setSpeed] = useState(250) // Default speed: 250 words per minute

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(event.target.value))
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Gauge className="w-5 h-5 mr-2 text-blue-500" />
        阅读速度调节器
      </h3>
      <div className="flex items-center">
        <input
          type="range"
          min="100"
          max="500"
          value={speed}
          onChange={handleSpeedChange}
          className="w-full"
        />
        <span className="ml-2 text-sm font-medium">{speed} 字/分钟</span>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        建议速度: 200-300 字/分钟。根据内容难度自由调整。
      </p>
    </div>
  )
}

export default ReadingSpeedAdjuster