import React, { useState } from 'react'
import { Headphones, Play, Pause } from 'lucide-react'

const AudioSummary: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Headphones className="w-5 h-5 mr-2 text-purple-500" />
        音频摘要
      </h3>
      <div className="flex items-center justify-between">
        <span className="text-sm">第三章：社会变革</span>
        <button
          onClick={togglePlayPause}
          className="bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        时长：5分钟
      </div>
    </div>
  )
}

export default AudioSummary